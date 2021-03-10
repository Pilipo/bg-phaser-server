const { Server } = require('boardgame.io/server');
const { TTT } = require('./src/game');

const lobbyConfig = {
  apiPort: 8080,
  apiCallback: () => console.log('Running Lobby on port 8080'),
}

const server = Server({ games: [TTT] });

server.run({ port: 8000, lobbyConfig });