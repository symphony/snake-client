let connection;
const move = {
  w: "up",
  a: "left",
  d: "right",
  s: "left"
};

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const disconnect = () => {
  connection.write(`Say: Goodbye, World`);
  setTimeout(() => {
    connection.destroy();
    process.exit();
  }, 2000);
};

const handleUserInput = key => {
  if (key === '\u0003') disconnect();
  if (move[key] !== undefined) connection.write(`Move: ${move[key]}`);
  if (key === "h") connection.write(`Say: hello`);
};

module.exports = { setupInput };