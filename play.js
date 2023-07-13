// Import necessary modules and functions
const { Game } = require('./src/Game');                   // Import the Game class from './src/Game'
const { UserInterface } = require('./src/UserInterface'); // Import the UserInterface class from './src/UserInterface'
const { RemoteInterface } = require('./src/RemoteInterface'); // Import the RemoteInterface class from './src/RemoteInterface'
const { connect } = require('./client');                  // Import the connect function from './client'

// Print a message to indicate the connection process
console.log("Connecting ...");

// Connect to the server using the connect function
const connection = connect();

// Create a new instance of the Game class
// Pass UserInterface and RemoteInterface instances, along with the connection, to the Game constructor
const game = new Game(new UserInterface(), new RemoteInterface(connection));

// Start the game
game.start();
