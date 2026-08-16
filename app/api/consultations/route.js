import { ObjectId } from "mongodb";
import clientPromise from "@/lib/mongodb";

export const dynamic = "force-dynamic";

const DATABASE_NAME =
  process.env.MONGODB_DB ||
  "nexkripa";

const COLLECTION_NAME =
  "consultations";

const ALLOWED_STATUSES =
  new Set([
    "pending",
    "confirmed",
    "completed",
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
  maxLength = 500
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

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
    String(value || "").trim()
  );
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
   POST - PUBLIC
   SAVE BOOKING / EMAIL CAPTURE
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
            "Invalid consultation request.",
        },
        400
      );
    }

    const type =
      body?.type ===
        "email_capture"
        ? "email_capture"
        : "booking";

    const email =
      cleanString(
        body?.email,
        160
      ).toLowerCase();

    if (!isValidEmail(email)) {
      return jsonResponse(
        {
          success: false,
          message:
            "Please enter a valid email address.",
        },
        400
      );
    }

    const collection =
      await getCollection();

    if (
      type ===
      "email_capture"
    ) {
      await collection.insertOne({
        type:
          "email_capture",
        email,
        page:
          cleanString(
            body?.page || "/",
            180
          ),
        intent:
          cleanString(
            body?.intent,
            60
          ),
        sessionId:
          cleanString(
            body?.sessionId,
            100
          ),
        createdAt:
          new Date(),
      });

      return jsonResponse(
        {
          success: true,
          message:
            "Email captured successfully.",
        },
        201
      );
    }

    const name =
      cleanString(
        body?.name,
        120
      );

    const phone =
      cleanString(
        body?.phone,
        40
      );

    const service =
      cleanString(
        body?.service,
        120
      );

    const date =
      cleanString(
        body?.date,
        20
      );

    const time =
      cleanString(
        body?.time,
        20
      );

    const requirement =
      cleanString(
        body?.requirement,
        1500
      );

    if (
      !name ||
      !phone ||
      !service ||
      !date ||
      !time
    ) {
      return jsonResponse(
        {
          success: false,
          message:
            "Please fill all required consultation fields.",
        },
        400
      );
    }

    await collection.insertOne({
      type: "booking",
      name,
      email,
      phone,
      service,
      date,
      time,
      requirement,
      page:
        cleanString(
          body?.page || "/",
          180
        ),
      intent:
        cleanString(
          body?.intent,
          60
        ),
      sessionId:
        cleanString(
          body?.sessionId,
          100
        ),
      status: "pending",
      createdAt:
        new Date(),
      updatedAt:
        new Date(),
    });

    return jsonResponse(
      {
        success: true,
        message:
          "Consultation request submitted successfully.",
      },
      201
    );
  } catch (error) {
    console.error(
      "Consultation POST error:",
      error
    );

    return jsonResponse(
      {
        success: false,
        message:
          "Unable to save consultation request.",
      },
      500
    );
  }
}

/* =====================================
   GET - ADMIN
===================================== */

export async function GET() {
  try {
    const collection =
      await getCollection();

    const consultations =
      await collection
        .find({})
        .sort({
          createdAt: -1,
        })
        .limit(200)
        .toArray();

    return jsonResponse({
      success: true,
      consultations:
        consultations.map(
          (item) => ({
            ...item,
            _id:
              item._id.toString(),
          })
        ),
    });
  } catch (error) {
    console.error(
      "Consultation GET error:",
      error
    );

    return jsonResponse(
      {
        success: false,
        message:
          "Unable to load consultation requests.",
      },
      500
    );
  }
}

/* =====================================
   PATCH - ADMIN STATUS UPDATE
===================================== */

export async function PATCH(
  request
) {
  try {
    const body =
      await request.json();

    const id =
      cleanString(
        body?.id,
        80
      );

    const status =
      cleanString(
        body?.status,
        30
      ).toLowerCase();

    if (
      !ObjectId.isValid(id)
    ) {
      return jsonResponse(
        {
          success: false,
          message:
            "Invalid consultation ID.",
        },
        400
      );
    }

    if (
      !ALLOWED_STATUSES.has(
        status
      )
    ) {
      return jsonResponse(
        {
          success: false,
          message:
            "Invalid consultation status.",
        },
        400
      );
    }

    const collection =
      await getCollection();

    const result =
      await collection.updateOne(
        {
          _id:
            new ObjectId(id),
          type:
            "booking",
        },
        {
          $set: {
            status,
            updatedAt:
              new Date(),
          },
        }
      );

    if (
      result.matchedCount === 0
    ) {
      return jsonResponse(
        {
          success: false,
          message:
            "Consultation request not found.",
        },
        404
      );
    }

    return jsonResponse({
      success: true,
      message:
        "Consultation status updated.",
    });
  } catch (error) {
    console.error(
      "Consultation PATCH error:",
      error
    );

    return jsonResponse(
      {
        success: false,
        message:
          "Unable to update consultation.",
      },
      500
    );
  }
}

/* =====================================
   DELETE - ADMIN
===================================== */

export async function DELETE(
  request
) {
  try {
    const body =
      await request.json();

    const id =
      cleanString(
        body?.id,
        80
      );

    if (
      !ObjectId.isValid(id)
    ) {
      return jsonResponse(
        {
          success: false,
          message:
            "Invalid consultation ID.",
        },
        400
      );
    }

    const collection =
      await getCollection();

    const result =
      await collection.deleteOne({
        _id:
          new ObjectId(id),
      });

    if (
      result.deletedCount === 0
    ) {
      return jsonResponse(
        {
          success: false,
          message:
            "Consultation request not found.",
        },
        404
      );
    }

    return jsonResponse({
      success: true,
      message:
        "Consultation deleted successfully.",
    });
  } catch (error) {
    console.error(
      "Consultation DELETE error:",
      error
    );

    return jsonResponse(
      {
        success: false,
        message:
          "Unable to delete consultation.",
      },
      500
    );
  }
}