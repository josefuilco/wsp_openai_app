import { Router } from "oak";
import * as wsp from "../controllers/main.wspControllers.ts";

const router = new Router();

router.get("/whatsapp", wsp.verifyToken);

router.post("/whatsapp", wsp.receivedMessage);

export default router;
