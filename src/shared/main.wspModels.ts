export function MessageText(textResponse: string, num: number) {
  const data = JSON.stringify({
    messaging_product: "whatsapp",
    to: num,
    text: {
      preview_url: true,
      body: textResponse,
    },
    type: "text",
  });
  return data;
}
