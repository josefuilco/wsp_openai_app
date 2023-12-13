export const sendMessageWhatsApp = async (
  textResponse: string,
  num: number
) => {
  const data = JSON.stringify({
    messaging_product: "whatsapp",
    to: num,
    text: {
      body: textResponse,
    },
    type: "text",
  });

  const options: opciones = {
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer EAAMn2U4pDZCABOxZC5b94THBnZABRi1kznMmqIKzEc1wzBMGFQAve8fqkUqmEpMmIuxhBh9LoZBBejU4uNhpbHHJz8LhgqRhz20rsXoMZCFwMWNGZBx3cPtFkZAEemwXLlWczbJHdF8O23SsdwZBNimZCPeSb35LUe9HZA1RVh68LMA54P5ZCTCuy77PQZBPZBsRBwBC15tUE3pmZASV1WDFuE2mzueUMLH0vqMlXlZAknP5ysZD",
    },
  };

  const url = "https://graph.facebook.com/v17.0/136730156200200/messages";
  const response = await fetch(url, options);

  if (response.ok) {
    const responseData = await response.text();
    console.log("Hola mundo");
  } else console.error(`Error: ${response.status} - ${response.statusText}`);
};

interface opciones {
  method: string;
  body: string;
  headers: head;
}

type head = {
  "Content-Type": string;
  Authorization: string;
};
