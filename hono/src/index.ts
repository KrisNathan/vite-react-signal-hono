import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { serveStatic } from "@hono/node-server/serve-static";
import { logger } from "hono/logger";

const app = new Hono();
app.use("*", logger());
app.use(
  "*",
  serveStatic({
    root: "../react/dist",
  })
);
app.use("/*", serveStatic({ root: "../react/dist", path: "index.html" }));


const port = 3000;
console.log(`Server is running on http://localhost:${port}`);

serve({
  fetch: app.fetch,
  port,
});
