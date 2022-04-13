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
  });

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  conn.on('end', () => {
    console.log('Disconnected from server.');
  });

  conn.on('connect', () => {
    conn.write("Name: jc🙂");
  });

  return;
};

module.exports = {connect};