import { MessageText } from "./main.wspModels.ts";
import * as wsp from "../services/main.whatsapp.ts";
import * as gpt from "../services/main.chatbot.ts";

export async function processMessage(textUser: string, num: number) {
  textUser = textUser.toLocaleLowerCase();
  const models = [];

  const resultChatGpt = await gpt.getMessageChatGPT(textUser);
  if (resultChatGpt != null) {
    const model = MessageText(textUser, num);
    models.push(model);
  } else {
    const model = MessageText("Intentemolos mas tarde", num);
    models.push(model);
  }

  models.forEach((model) => {
    wsp.sendMessageWhatsApp(model, num);
  });
}
