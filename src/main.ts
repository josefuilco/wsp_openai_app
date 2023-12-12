import { Application } from "oak";
import router from "./routes/main.routes.ts";

const app = new Application();
const PORT: number = Number(Deno.env.get("SERVER_PORT")) || 5000;

app.use(router.routes());
app.use(router.allowedMethods());

console.log(`URL: http://localhost:${PORT}/`);
await app.listen({ port: PORT });
