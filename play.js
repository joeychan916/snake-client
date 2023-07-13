const { Game } = require('./src/Game');
const { UserInterface } = require('./src/UserInterface');
const { RemoteInterface } = require('./src/RemoteInterface');
const { connect } = require('./client');
const { setupInput } = require('./input');

console.log("Connecting ...");
const connection = connect();

const game = new Game(new UserInterface(), new RemoteInterface(connection));
game.start();

// Setup interface to handle user input from stdin
const stdin = setupInput(connection);

// Create a function to handle user input
const handleUserInput = function (key) {
  if (key === '\u0003') {
    // Terminate the game when CTRL + C is pressed
    process.exit();
  }
};

// Register the handleUserInput function as the "data" callback handler for stdin
stdin.on("data", handleUserInput);
