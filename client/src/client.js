const io = require('socket.io-client');

const socket = io('http://localhost:3000');

const name = 'Some User';
appendMessage('You joined');

socket.emit('new-user', name);

socket.on('chat-message', data => {
  appendMessage(`${data.name}: ${data.message}`)
})

socket.on('user-connected', name => {
  appendMessage(`${name} connected`)
})

socket.on('user-disconnected', name => {
  appendMessage(`${name} disconnected`)
})

function appendMessage(message) {
  console.log(message);
}
