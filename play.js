const { Game } = require('./src/Game');
const { UserInterface } = require('./src/UserInterface');
const { RemoteInterface } = require('./src/RemoteInterface');
const { connect } = require('./client');

console.log("Connecting ...");
const connection = connect();

const game = new Game(new UserInterface(), new RemoteInterface(connection));
game.start();
