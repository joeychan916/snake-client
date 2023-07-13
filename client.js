const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: 3000,
  });

  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: JC");
  });

  return conn;
};

module.exports = { connect };
