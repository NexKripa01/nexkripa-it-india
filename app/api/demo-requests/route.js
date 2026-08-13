import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;

    const db = client.db(
      process.env.MONGODB_DB || "nexkripa"
    );

    const requests = await db
      .collection("demoRequests")
      .find({})
      .sort({ createdAt: -1 })
      .toArray();

    const formattedRequests = requests.map((item) => ({
      ...item,
      _id: item._id.toString(),
    }));

    return Response.json({
      success: true,
      requests: formattedRequests,
    });
  } catch (error) {
    console.error("Fetch demo requests error:", error);

    return Response.json(
      {
        success: false,
        message: "Unable to fetch demo requests.",
      },
      {
        status: 500,
      }
    );
  }
}