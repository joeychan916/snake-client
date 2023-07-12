#!/usr/bin/env node

process.stdout.write('\x07');

const { Game } = require('./src/Game');
const { UserInterface } = require('./src/UserInterface');
const { RemoteInterface } = require('./src/RemoteInterface');
const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: 'localhost', // Enter the server IP address here
    port: 3000, // Enter the server port number here
  });

  conn.setEncoding("utf8");
  return conn;
};

console.log("Connecting ...");
const connection = connect();

const game = new Game(new UserInterface(), new RemoteInterface(connection));
game.start();
