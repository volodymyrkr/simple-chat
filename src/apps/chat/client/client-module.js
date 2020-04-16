const ioclient = require('socket.io-client');
const api = require('../api');
const utils = require('../utils');

const ChatClient = function() {
  this.port = undefined;
  this.socket = null;
  this.user = {name: 'Petya'};
  this.chatName = this.user.name;
}

ChatClient.prototype.init = function(config) {
  this.socket = ioclient(`http://localhost:${config.port}`);

  this.registerHandler(api.CONNECTED, () => {
    console.log('Connected.');
    this.chatName = utils.hashUserName(this.user.name);
    this.send(api.REGISTER_USER, `${this.chatName}`)
  });

  this.registerHandler(api.USER_JOINED, (name) => {
    console.log(`Welcome, ${name}.`);
    this.user.chatName = name;
    this.send(api.USER_MESSAGE, {name: this.user.name, message: `Hello guys!`})
  });
}

ChatClient.prototype.registerHandler = function(command, handler) {
  this.socket.on(command, handler);
}

ChatClient.prototype.send = function(command, data) {
  this.socket.emit(command, data);
}

module.exports = ChatClient;
// const socket = io('http://localhost:3000');

// const name = 'Some User';
// appendMessage('You joined');
//
// socket.emit('new-user', name);
//
// socket.on('chat-message', data => {
//   appendMessage(`${data.name}: ${data.message}`)
// })
//
// socket.on('user-connected', name => {
//   appendMessage(`${name} connected`)
// })
//
// socket.on('user-disconnected', name => {
//   appendMessage(`${name} disconnected`)
// })
//
// function appendMessage(message) {
//   console.log(message);
// }
