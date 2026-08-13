import clientPromise from "@/lib/mongodb";

export async function POST(request) {
  try {
    const body = await request.json();

    const { name, phone, email, demoType } = body;

    if (!name || !phone || !email || !demoType) {
      return Response.json(
        {
          success: false,
          message: "All fields are required.",
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

    const result = await collection.insertOne({
      name: name.trim(),
      phone: phone.trim(),
      email: email.trim().toLowerCase(),
      demoType,

      status: "pending",
      approved: false,

      accessCode: null,
      used: false,

      createdAt: new Date(),
      approvedAt: null,
      usedAt: null,
    });

    return Response.json(
      {
        success: true,
        message: "Demo request submitted successfully.",
        requestId: result.insertedId.toString(),
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error("Demo request error:", error);

    return Response.json(
      {
        success: false,
        message: "Something went wrong.",
      },
      {
        status: 500,
      }
    );
  }
}