const net = require('net');
const config = {
  host: '165.227.47.243',
  port: 50541
};

const connect = () => {
  const conn = net.createConnection(config);
  conn.setEncoding('utf8'); // interpret data as text

  conn.on('connect', (data) => {
    console.log('Connected to server!');
    conn.write("Name: jc🙂");
  });

  conn.on('end', () => {
    console.log('Disconnected from server.');
  });

  listen(conn);
  return;
};

const listen = conn => {
  conn.on('connect', () => {
    setInterval(() => conn.write("Move: up"), 50);
  });

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  return;
};

module.exports = {connect};