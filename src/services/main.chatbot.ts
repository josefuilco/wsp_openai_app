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

    return response.choices[0].text; // Retorna la respuesta
  } catch (error) {
    return `El error es: ${error}`;
  }
}
