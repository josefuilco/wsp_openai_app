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

    console.log(await response.choices[0].text);
    return response.choices[0].text;
  } catch (error) {
    return `El error es: ${error}`;
  }
}
