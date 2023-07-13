const { Game } = require('./src/Game');
const { UserInterface } = require('./src/UserInterface');
const { RemoteInterface } = require('./src/RemoteInterface');
const { connect } = require('./client');

console.log("Connecting ...");
const connection = connect();

const game = new Game(new UserInterface(), new RemoteInterface(connection));
game.start();

// Setup interface to handle user input from stdin
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

// Create a function to handle user input
const handleUserInput = function (key) {
  if (key === '\u0003') {
    // Terminate the game when CTRL + C is pressed
    process.exit();
  }
};

// Register the handleUserInput function as the "data" callback handler for stdin
const stdin = setupInput();
stdin.on("data", handleUserInput);
