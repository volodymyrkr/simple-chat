const io = require("socket.io-client");

const socket = io.connect("127.0.0.1:8888", {reconnect: true});

socket.on( "connect", (socket) => {
  socket.emit("new client is connected");
});