import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const POST = async (req, res) => {
  const { prompt, tag, userId } = await req.json();

  try {
    await connectToDB();
    const newPrompt = new Prompt({
      creator: userId,
      prompt,
      tag,
    });
    console.log(newPrompt);

    await newPrompt.save();
    return new Response(newPrompt, { status: 201 });
  } catch (error) {
    console.error(error);
    return new Response("Failed to create new prompt", { status: 500 });
  }
};
