import { Router } from "oak";
import * as wsp from "../controllers/main.wspControllers.ts";

const router = new Router();

router.get("/", wsp.verifyToken);

router.post("/wsp", wsp.receivedMessage);

export default router;
