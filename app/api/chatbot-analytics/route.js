import clientPromise from "@/lib/mongodb";

export const dynamic = "force-dynamic";

const DATABASE_NAME =
  process.env.MONGODB_DB ||
  "nexkripa";

const COLLECTION_NAME =
  "chatbot_analytics";

const ALLOWED_EVENTS = new Set([
  "chat_open",
  "chat_close",
  "chat_reset",
  "message_sent",
  "quick_question_click",
  "cta_click",
  "cta_navigation",
  "start_project",
  "whatsapp_click",
  "page_context",
]);

function jsonResponse(
  data,
  status = 200
) {
  return new Response(
    JSON.stringify(data),
    {
      status,
      headers: {
        "Content-Type":
          "application/json",

        "Cache-Control":
          "no-store",
      },
    }
  );
}

function cleanString(
  value,
  maxLength = 120
) {
  if (
    typeof value !== "string"
  ) {
    return "";
  }

  return value
    .trim()
    .slice(0, maxLength);
}

function cleanNumber(value) {
  const number = Number(value);

  if (
    !Number.isFinite(number) ||
    number < 0
  ) {
    return 0;
  }

  return Math.min(
    Math.round(number),
    10000
  );
}

function sanitizeEvent(body) {
  const event =
    cleanString(
      body?.event,
      60
    );

  if (
    !ALLOWED_EVENTS.has(event)
  ) {
    return null;
  }

  return {
    event,

    sessionId:
      cleanString(
        body?.sessionId,
        100
      ),

    page:
      cleanString(
        body?.page || "/",
        180
      ) || "/",

    intent:
      cleanString(
        body?.intent,
        60
      ),

    source:
      cleanString(
        body?.source,
        60
      ),

    label:
      cleanString(
        body?.label,
        100
      ),

    action:
      cleanString(
        body?.action,
        60
      ),

    destination:
      cleanString(
        body?.destination,
        180
      ),

    messageLength:
      cleanNumber(
        body?.messageLength
      ),

    clientTimestamp:
      cleanString(
        body?.timestamp,
        50
      ),

    createdAt:
      new Date(),
  };
}

async function getCollection() {
  const client =
    await clientPromise;

  const db =
    client.db(
      DATABASE_NAME
    );

  return db.collection(
    COLLECTION_NAME
  );
}

/* =====================================
   POST - SAVE ANALYTICS EVENT
===================================== */

export async function POST(
  request
) {
  try {
    let body;

    try {
      body =
        await request.json();
    } catch {
      return jsonResponse(
        {
          success: false,

          message:
            "Invalid analytics payload.",
        },
        400
      );
    }

    const event =
      sanitizeEvent(body);

    if (!event) {
      return jsonResponse(
        {
          success: false,

          message:
            "Unsupported analytics event.",
        },
        400
      );
    }

    const collection =
      await getCollection();

    await collection.insertOne(
      event
    );

    return jsonResponse(
      {
        success: true,
      },
      201
    );
  } catch (error) {
    console.error(
      "Chatbot analytics POST error:",
      error
    );

    return jsonResponse(
      {
        success: false,

        message:
          "Unable to save analytics event.",
      },
      500
    );
  }
}

/* =====================================
   GET - ADMIN ANALYTICS
===================================== */

export async function GET() {
  try {
    const collection =
      await getCollection();

    const [
      totalEvents,
      chatOpens,
      messages,
      projectLeads,
      whatsappClicks,
      ctaClicks,
      topIntentResult,
      topPageResult,
      recent,
    ] =
      await Promise.all([
        collection.countDocuments(),

        collection.countDocuments({
          event: "chat_open",
        }),

        collection.countDocuments({
          event: "message_sent",
        }),

        collection.countDocuments({
          event: "start_project",
        }),

        collection.countDocuments({
          event: "whatsapp_click",
        }),

        collection.countDocuments({
          event: "cta_click",
        }),

        collection
          .aggregate([
            {
              $match: {
                intent: {
                  $nin: [
                    "",
                    "general",
                  ],
                },
              },
            },
            {
              $group: {
                _id: "$intent",

                count: {
                  $sum: 1,
                },
              },
            },
            {
              $sort: {
                count: -1,
              },
            },
            {
              $limit: 1,
            },
          ])
          .toArray(),

        collection
          .aggregate([
            {
              $match: {
                page: {
                  $type:
                    "string",
                },
              },
            },
            {
              $group: {
                _id: "$page",

                count: {
                  $sum: 1,
                },
              },
            },
            {
              $sort: {
                count: -1,
              },
            },
            {
              $limit: 1,
            },
          ])
          .toArray(),

        collection
          .find(
            {},
            {
              projection: {
                _id: 0,
                event: 1,
                sessionId: 1,
                page: 1,
                intent: 1,
                source: 1,
                label: 1,
                action: 1,
                destination: 1,
                messageLength: 1,
                createdAt: 1,
              },
            }
          )
          .sort({
            createdAt: -1,
          })
          .limit(20)
          .toArray(),
      ]);

    return jsonResponse({
      success: true,

      summary: {
        totalEvents,
        chatOpens,
        messages,
        projectLeads,
        whatsappClicks,
        ctaClicks,

        topIntent:
          topIntentResult?.[0]
            ?._id || "—",

        topPage:
          topPageResult?.[0]
            ?._id || "—",
      },

      recent:
        recent.map(
          (item) => ({
            ...item,

            timestamp:
              item.createdAt
                ? new Date(
                    item.createdAt
                  ).toISOString()
                : null,
          })
        ),
    });
  } catch (error) {
    console.error(
      "Chatbot analytics GET error:",
      error
    );

    return jsonResponse(
      {
        success: false,

        message:
          "Unable to load chatbot analytics.",
      },
      500
    );
  }
}

/* =====================================
   DELETE - CLEAR ALL ANALYTICS
===================================== */

export async function DELETE() {
  try {
    const collection =
      await getCollection();

    const result =
      await collection.deleteMany({});

    return jsonResponse({
      success: true,

      message:
        "Chatbot analytics deleted successfully.",

      deletedCount:
        result.deletedCount,
    });
  } catch (error) {
    console.error(
      "Chatbot analytics DELETE error:",
      error
    );

    return jsonResponse(
      {
        success: false,

        message:
          "Unable to delete chatbot analytics.",
      },
      500
    );
  }
}