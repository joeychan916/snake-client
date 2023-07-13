const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost", // Enter the server IP address here
    port: 3000, // Enter the server port number here
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
