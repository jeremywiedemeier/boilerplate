import WebSocket = require("ws");
import { port } from "./resources";

const server = new WebSocket.Server({ port });

server.on("connection", (socket) => {
  socket.on("message", (message) => {
    console.log(`Received message: ${message}`);
    socket.send(`What? "${message}"?`);
  });
});

console.log(`Started at port ${port}`);
