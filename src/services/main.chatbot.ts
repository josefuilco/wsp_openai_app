import OpenAI from "openai";

const client = new OpenAI({
  apiKey: "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",
});

export async function getMessageChatGPT(text: string) {
  try {
    const response = await client.chat.completions.create({
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant designed to output JSON.",
        },
        {
          role: "user",
          content: text,
        },
      ],
      model: "gpt-3.5-turbo-1106",
      response_format: { type: "json_object" },
    });

    return response.choices[0].message.content;
  } catch (error) {
    return `El error es: ${error}`;
  }
}
