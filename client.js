const net = require('net');
const { IP, PORT, NAME } = require('./constants');
const config = {
  host: IP,
  port: PORT
};

const connect = () => {
  const conn = net.createConnection(config);
  conn.setEncoding('utf8'); // interpret data as text

  conn.on('connect', () => {
    console.log(' # Connected to server! #\n');
    conn.write(`Name: ${NAME}`);
  });

  conn.on('data', (data) => {
    console.log('Server: ', data);
  });

  conn.on('end', () => {
    console.log(' # Disconnected from server #\n');
    process.exit();
  });

  return conn;
};

module.exports = { connect };