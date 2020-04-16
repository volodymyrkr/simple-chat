const io = require('socket.io');
const config = require('../bootstrap/chat/config/default');
const api = require('../api');

const userVerified = true;

const ChatServer = function() {
  this.socket = null;
}

ChatServer.prototype.registerHandler = function(command, handler) {
  this.socket.on(command, handler);
};

ChatServer.prototype.registerBaseHandlers = function() {
  [
    {
      command: api.REGISTER_USER,
      handler: (name) => {
        console.log(`${name} tries to register.`);
        this.socket.emit(userVerified ? api.USER_JOINED : api.USER_DECLINED, name);
        console.log(`${name} is registered.`);
      }
    },
    {
      command: api.DISCONNECTED,
      handler: (name) => {
        console.log(`${name} has left.`);
      }
    },
    {
      command: api.USER_MESSAGE,
      handler: (message) => {
        console.log(`${message.name}: ${message.message}`);
        this.socket.emit(message);
      }
    }
  ].forEach(item => this.registerHandler(item.command, item.handler))
}

ChatServer.prototype.init = function(config) {
  const server = io.listen(config.port);
  server.on(
    api.CONNECTION,
    (socket) => {
      console.log("New connection is detected...");
      this.socket = socket;
      this.registerBaseHandlers();
      server.emit(api.CONNECTED);
    }
  );
}

module.exports = ChatServer;
