const { Game } = require('./src/Game');
const { UserInterface } = require('./src/UserInterface');
const { RemoteInterface } = require('./src/RemoteInterface');
const { connect } = require('./client');

console.log("Connecting ...");
const connection = connect();

const game = new Game(new UserInterface(), new RemoteInterface(connection));
game.start();

// Step 1: Send "Move: up" as soon as you connect
connection.on("connect", () => {
  connection.write("Move: up");
});

// Step 2: Sending multiple successive move messages
// connection.write("Move: up");
// connection.write("Move: down");

// Step 3: Delaying move messages using setTimeout
// const moves = ["up", "down", "left", "right"];
// moves.forEach((direction, index) => {
//   setTimeout(() => {
//     connection.write(`Move: ${direction}`);
//   }, index * 50);
// });

// Step 4: Continually moving the snake using setInterval
// setInterval(() => {
//   connection.write("Move: up");
// }, 50);

// Step 5: Comment out or remove the hard-coded move message
// connection.write("Move: up"); // Commented out or removed
