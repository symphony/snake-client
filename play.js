const { connect } = require('./client');
const { setupInput } = require('./input');
const validMovements = ["left", "up", "down", "right"]

const listen = () => {
  // if (validMovements.includes(input)) conn.write(`Move: ${input}`);
  return;
};

console.log("Connecting..");
connect();
setupInput();
// listen();