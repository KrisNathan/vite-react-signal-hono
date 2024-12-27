import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { serveStatic } from "@hono/node-server/serve-static";
import { logger } from "hono/logger";
import fs from "node:fs";

const app = new Hono();
const index = fs.readFileSync("../react/dist/index.html", "utf8");
app.use("*", logger());
app.use(
  "*",
  serveStatic({
    root: "../react/dist",
  })
);
// for some reason path: doesnt want stuff outside of the project itself.
// app.use("/*", serveStatic({ path: "../react/dist/index.html" }));
app.get("/*", (c) => {
  return c.html(index);
});

const port = 3000;
console.log(`Server is running on http://localhost:${port}`);

serve({
  fetch: app.fetch,
  port,
});
