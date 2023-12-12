import { Request, Response } from "oak";

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

export const receivedMessage = ({ response }: { response: Response }) => {
  response.body = "Hola Received";
};
