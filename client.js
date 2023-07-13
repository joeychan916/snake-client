const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost', // Enter the server IP address here
    port: 3000, // Enter the server port number here
  });

  conn.setEncoding("utf8");
  return conn;
};

module.exports = { connect };
