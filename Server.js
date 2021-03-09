const { Server } = require('boardgame.io/server');
const { TTT } = require('./src/game');

const server = Server({ games: [TTT] });

server.run(8000);