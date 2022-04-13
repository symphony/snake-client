const {connect} = require('./client');
const validMovements = ["left", "up", "down", "right"]

const setupInput = () => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = input => {
  if (input === '\u0003') process.exit();
  if (validMovements.includes(input)) conn.write(`Move: ${input}`);
}

const listen = () => {
  // stdin("");
  return;
};

const conn = connect();
const stdin = setupInput();
listen();