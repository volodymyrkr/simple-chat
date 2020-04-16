const ChatServer = require("./server-module");
const config = require('../bootstrap/chat/config/default');

const server = new ChatServer();
server.init(config);