import clientPromise from "../../../../lib/mongodb";

export async function GET(request: Request) {
  try {
    const client = await clientPromise;
    const db = client.db("bookstore");
    const movies = await db
            .collection("books")
            .find({})
            .limit(10)
            .toArray();
    return Response.json(movies);
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
