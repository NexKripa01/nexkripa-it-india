import clientPromise from "@/lib/mongodb";

export async function POST(request) {
  try {
    const body = await request.json();

    const { accessCode } = body;

    if (
      !accessCode ||
      typeof accessCode !== "string" ||
      accessCode.trim().length !== 4
    ) {
      return Response.json(
        {
          success: false,
          message: "Please enter a valid 4-digit code.",
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
      accessCode: accessCode.trim(),
      approved: true,
    });

    if (!demoRequest) {
      return Response.json(
        {
          success: false,
          message: "Invalid demo access code.",
        },
        {
          status: 404,
        }
      );
    }

    if (demoRequest.used) {
      return Response.json(
        {
          success: false,
          message:
            "This demo code has already been used.",
        },
        {
          status: 403,
        }
      );
    }

    if (!demoRequest.demoUrl) {
      return Response.json(
        {
          success: false,
          message:
            "No demo link is assigned to this code.",
        },
        {
          status: 400,
        }
      );
    }

    await collection.updateOne(
      {
        _id: demoRequest._id,
        used: false,
      },
      {
        $set: {
          used: true,
          status: "used",
          usedAt: new Date(),
        },
      }
    );

    return Response.json({
      success: true,
      message: "Access granted.",
      demoUrl: demoRequest.demoUrl,
    });
  } catch (error) {
    console.error("Demo access error:", error);

    return Response.json(
      {
        success: false,
        message:
          "Unable to verify demo access code.",
      },
      {
        status: 500,
      }
    );
  }
}