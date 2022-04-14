let connection;
const validMovements = ["w", "a", "s", "d"];
const move = {
  w: "up",
  a: "left",
  d: "right",
  s: "left"
}

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
  connection.destroy();
  process.exit();
};

const handleUserInput = key => {
  if (key === '\u0003') disconnect();
  if (validMovements.includes(key)) connection.write(`Move: ${move[key]}`);
};

module.exports = { setupInput };