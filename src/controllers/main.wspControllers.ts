import { Response } from "oak";

export const verifyToken = ({ response }: { response: Response }) => {
  response.body = "Hola verifyToken";
};

export const receivedMessage = ({ response }: { response: Response }) => {
  response.body = "Hola Received";
};
