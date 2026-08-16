import clientPromise from "@/lib/mongodb";

export const dynamic = "force-dynamic";

const DATABASE_NAME =
  process.env.MONGODB_DB ||
  "nexkripa";

const COLLECTION_NAME =
  "chatbot_conversations";

function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
    },
  });
}

function cleanString(value, maxLength = 2000) {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim().slice(0, maxLength);
}

function cleanMessages(messages) {
  if (!Array.isArray(messages)) {
    return [];
  }

  return messages
    .filter(
      (item) =>
        item &&
        (item.role === "user" || item.role === "assistant") &&
        typeof item.content === "string" &&
        item.content.trim()
    )
    .map((item) => ({
      role: item.role,
      content: cleanString(item.content, 2000),
    }))
    .slice(-100);
}

function mergeMessages(...messageGroups) {
  const result = [];

  for (const group of messageGroups) {
    const cleaned = cleanMessages(group);

    for (const item of cleaned) {
      const previous = result[result.length - 1];

      if (
        previous &&
        previous.role === item.role &&
        previous.content === item.content
      ) {
        continue;
      }

      result.push(item);
    }
  }

  return result.slice(-100);
}

async function getCollection() {
  const client = await clientPromise;
  const db = client.db(DATABASE_NAME);

  return db.collection(COLLECTION_NAME);
}

/* =====================================
   POST - SAVE / UPDATE / MERGE MEMORY
===================================== */

export async function POST(request) {
  try {
    let body;

    try {
      body = await request.json();
    } catch {
      return jsonResponse(
        {
          success: false,
          message: "Invalid request.",
        },
        400
      );
    }

    const sessionId = cleanString(
      body?.sessionId,
      100
    );

    const email = cleanString(
      body?.email,
      160
    ).toLowerCase();

    const incomingMessages = cleanMessages(
      body?.messages
    );

    if (!sessionId && !email) {
      return jsonResponse(
        {
          success: false,
          message: "Session or email is required.",
        },
        400
      );
    }

    if (incomingMessages.length === 0) {
      return jsonResponse(
        {
          success: false,
          message: "No valid messages found.",
        },
        400
      );
    }

    const collection = await getCollection();

    /* =====================================
       EMAIL KNOWN
       Merge anonymous session into email
    ===================================== */

    if (email) {
      const [emailConversation, sessionConversation] =
        await Promise.all([
          collection.findOne(
            { email },
            {
              projection: {
                messages: 1,
                sessionId: 1,
                createdAt: 1,
              },
            }
          ),

          sessionId
            ? collection.findOne(
                {
                  sessionId,
                  $or: [
                    { email: "" },
                    { email: { $exists: false } },
                  ],
                },
                {
                  projection: {
                    messages: 1,
                    createdAt: 1,
                  },
                }
              )
            : null,
        ]);

      const mergedMessages = mergeMessages(
        emailConversation?.messages || [],
        sessionConversation?.messages || [],
        incomingMessages
      );

      const now = new Date();

      await collection.updateOne(
        { email },
        {
          $set: {
            email,
            sessionId,
            messages: mergedMessages,
            updatedAt: now,
          },
          $setOnInsert: {
            createdAt:
              emailConversation?.createdAt ||
              sessionConversation?.createdAt ||
              now,
          },
        },
        {
          upsert: true,
        }
      );

      if (sessionId) {
        await collection.deleteMany({
          sessionId,
          $or: [
            { email: "" },
            { email: { $exists: false } },
          ],
        });
      }

      return jsonResponse({
        success: true,
        merged: true,
        identity: "email",
        messageCount: mergedMessages.length,
      });
    }

    /* =====================================
       ANONYMOUS SESSION
    ===================================== */

    const existingSession =
      await collection.findOne(
        {
          sessionId,
          $or: [
            { email: "" },
            { email: { $exists: false } },
          ],
        },
        {
          projection: {
            messages: 1,
            createdAt: 1,
          },
        }
      );

    const mergedMessages = mergeMessages(
      existingSession?.messages || [],
      incomingMessages
    );

    const now = new Date();

    await collection.updateOne(
      {
        sessionId,
        $or: [
          { email: "" },
          { email: { $exists: false } },
        ],
      },
      {
        $set: {
          sessionId,
          email: "",
          messages: mergedMessages,
          updatedAt: now,
        },
        $setOnInsert: {
          createdAt:
            existingSession?.createdAt ||
            now,
        },
      },
      {
        upsert: true,
      }
    );

    return jsonResponse({
      success: true,
      merged: false,
      identity: "session",
      messageCount: mergedMessages.length,
    });
  } catch (error) {
    console.error(
      "Chat memory POST error:",
      error
    );

    return jsonResponse(
      {
        success: false,
        message: "Unable to save chat memory.",
      },
      500
    );
  }
}

/* =====================================
   GET - LOAD CHAT MEMORY
===================================== */

export async function GET(request) {
  try {
    const url = new URL(request.url);

    const sessionId = cleanString(
      url.searchParams.get("sessionId"),
      100
    );

    const email = cleanString(
      url.searchParams.get("email"),
      160
    ).toLowerCase();

    if (!sessionId && !email) {
      return jsonResponse(
        {
          success: false,
          message: "Session or email is required.",
        },
        400
      );
    }

    const collection = await getCollection();

    let conversation = null;

    if (email) {
      conversation = await collection.findOne(
        { email },
        {
          projection: {
            _id: 0,
            messages: 1,
            email: 1,
            sessionId: 1,
            createdAt: 1,
            updatedAt: 1,
          },
        }
      );
    }

    if (!conversation && sessionId) {
      conversation = await collection.findOne(
        { sessionId },
        {
          projection: {
            _id: 0,
            messages: 1,
            email: 1,
            sessionId: 1,
            createdAt: 1,
            updatedAt: 1,
          },
        }
      );
    }

    return jsonResponse({
      success: true,
      found: Boolean(conversation),
      messages: conversation?.messages || [],
      email: conversation?.email || "",
      sessionId:
        conversation?.sessionId ||
        sessionId ||
        "",
      createdAt:
        conversation?.createdAt || null,
      updatedAt:
        conversation?.updatedAt || null,
    });
  } catch (error) {
    console.error(
      "Chat memory GET error:",
      error
    );

    return jsonResponse(
      {
        success: false,
        message: "Unable to load chat memory.",
      },
      500
    );
  }
}