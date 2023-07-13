// Stores the active TCP connection object.
let connection;

const setupInput = (conn) => {
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);
};

const handleUserInput = (key) => {
  if (key === "w") {
    connection.write("Move: up");
  } else if (key === "a") {
    connection.write("Move: left");
  } else if (key === "s") {
    connection.write("Move: down");
  } else if (key === "d") {
    connection.write("Move: right");
  } else if (key === "1") {
    connection.write("Say: Hey there!");
  } else if (key === "2") {
    connection.write("Say: Having a great time!");
  } else if (key === "3") {
    connection.write("Say: Let's win this!");
  } else if (key === "\u0003") {
    process.exit();
  }
};

module.exports = { setupInput };
