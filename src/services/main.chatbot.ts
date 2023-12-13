import OpenAI from "openai";

const client = new OpenAI({
  apiKey: "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",
});

export async function getMessageChatGPT(text: string) {
  try {
    const response = await client.completions.create({
      model: "text-davinci-003",
      prompt: text,
      max_tokens: 100,
    });

    return response.choices[0].text;
  } catch (error) {
    return `El error es: ${error}`;
  }
}
