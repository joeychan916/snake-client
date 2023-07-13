// client.js

const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // Event handler for successful connection
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: JC"); // Send the name message to the server upon connection
  });

  return conn;
};

module.exports = { connect };

