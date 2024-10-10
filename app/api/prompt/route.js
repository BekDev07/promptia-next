import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const GET = async (req, res) => {
  try {
    await connectToDB();
    const getPosts = await Prompt.find({}).populate("creator");

    if (!getPosts.length) {
      return new Response(JSON.stringify("No posts found", { status: 400 }));
    }

    return new Response(JSON.stringify(getPosts), { status: 200 });
  } catch (error) {
    return new Response("Internal Server Error", { status: 500 });
  }
};
