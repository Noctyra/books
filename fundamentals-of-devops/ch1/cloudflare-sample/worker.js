import { createServer } from "node:http";
import { httpServerHandler } from "cloudflare:node";

const server = createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello, World!\n");
});

server.listen(8080);

export default httpServerHandler({ port: 8080 });
