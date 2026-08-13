import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

function generateAccessCode() {
  return Math.floor(1000 + Math.random() * 9000).toString();
}

export async function POST(request, { params }) {
  try {
    const { id } = await params;

    const body = await request.json();

    const { demoUrl } = body;

    if (!ObjectId.isValid(id)) {
      return Response.json(
        {
          success: false,
          message: "Invalid request ID.",
        },
        {
          status: 400,
        }
      );
    }

    if (!demoUrl || !demoUrl.trim()) {
      return Response.json(
        {
          success: false,
          message: "Demo URL is required.",
        },
        {
          status: 400,
        }
      );
    }

    let parsedUrl;

    try {
      parsedUrl = new URL(demoUrl.trim());

      if (
        parsedUrl.protocol !== "http:" &&
        parsedUrl.protocol !== "https:"
      ) {
        throw new Error("Invalid protocol");
      }
    } catch {
      return Response.json(
        {
          success: false,
          message: "Please enter a valid demo URL.",
        },
        {
          status: 400,
        }
      );
    }

    const client = await clientPromise;

    const db = client.db(
      process.env.MONGODB_DB || "nexkripa"
    );

    const collection = db.collection("demoRequests");

    const demoRequest = await collection.findOne({
      _id: new ObjectId(id),
    });

    if (!demoRequest) {
      return Response.json(
        {
          success: false,
          message: "Demo request not found.",
        },
        {
          status: 404,
        }
      );
    }

    if (
      demoRequest.approved &&
      demoRequest.accessCode
    ) {
      return Response.json({
        success: true,
        message: "Request already approved.",
        accessCode: demoRequest.accessCode,
        demoUrl: demoRequest.demoUrl,
      });
    }

    let accessCode = "";
    let codeExists = true;

    while (codeExists) {
      accessCode = generateAccessCode();

      const existingCode = await collection.findOne({
        accessCode,
        used: false,
      });

      codeExists = Boolean(existingCode);
    }

    await collection.updateOne(
      {
        _id: new ObjectId(id),
      },
      {
        $set: {
          status: "approved",
          approved: true,

          accessCode,

          demoUrl: demoUrl.trim(),

          used: false,

          approvedAt: new Date(),
          usedAt: null,
        },
      }
    );

    return Response.json({
      success: true,
      message: "Demo request approved successfully.",
      accessCode,
      demoUrl: demoUrl.trim(),
    });
  } catch (error) {
    console.error(
      "Approve demo request error:",
      error
    );

    return Response.json(
      {
        success: false,
        message: "Unable to approve demo request.",
      },
      {
        status: 500,
      }
    );
  }
}