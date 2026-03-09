console.log(`TUNA CAN UP AND RUNNING`)
import { Hono } from "hono";
import { cors } from "hono/cors";
import { deleteCookie, getCookie, setCookie } from "hono/cookie";
import { serveStatic } from "hono/deno";
import { HomePage } from "./routes/Home.tsx";
const app = new Hono();
app.use("/*", cors());
app.use("/static/*", serveStatic({ root: "./" }));
app.get("/", (c) => {
  return c.html(<HomePage></HomePage>);
});
Deno.serve(app.fetch);