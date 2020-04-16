const ChatClient = require('./client-module');
const config = require('../bootstrap/chat/config/default');

const client = new ChatClient();
client.init(config);