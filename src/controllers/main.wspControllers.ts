import { Context, Request, Response } from "oak";
import { processMessage } from "../shared/main.processMessage.ts";

export const verifyToken = ({
  request,
  response,
}: {
  request: Request;
  response: Response;
}) => {
  try {
    const accessToken = "RTIIQWWTVHBDSD78S78DSNSND9090DST";
    const token = request.url.searchParams.get("hub.verify_token");
    const challenge = request.url.searchParams.get("hub.challenge");

    if (challenge != null && token != null && token == accessToken) {
      response.body = challenge;
    }
  } catch (error) {
    response.status = 400;
    response.body = `${error}`;
  }
};

export const receivedMessage = async (ctx: Context) => {
  try {
    ctx.state.body = await ctx.request.body({ type: "json" }).value; // Guardo y extraigo el formato json en el body de la variable context.state
    const body = ctx.state.body;
    const entry = body.entry[0];
    const changes = entry.changes[0];
    const value = changes.value;
    const messageObject = value.messages;

    if (typeof messageObject != "undefined") {
      const messages = messageObject[0];
      const num = messages.from;
      const text = getTextUser(messages);

      if (text != "") {
        await processMessage(text, num);
      }
    }

    ctx.response.body = "EVENT_RECEIVED";
  } catch (error) {
    console.log(error);
    ctx.response.body = "EVENT_RECEIVED";
  }
};

const getTextUser = (messages: any): string => {
  const tipo: string[] = [
    "text",
    "interactive",
    "type",
    "button_reply",
    "list_reply",
  ];
  let text = "";
  const typeMessage = messages.type;
  if (typeMessage === tipo[0]) {
    text = messages.text.body;
  } else if (typeMessage === tipo[1]) {
    const interactiveObject = messages.interactive;
    const typeInteractive = interactiveObject.type;

    if (typeInteractive === tipo[3]) {
      text = interactiveObject.button_reply.title;
    } else if (typeInteractive === tipo[4]) {
      text = interactiveObject.list_reply.title;
    } else console.log("Sin mensaje");
  } else console.log("Sin mensaje");

  return text;
};
