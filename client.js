const net = require('net');
const config = {
  host: '165.227.47.243',
  port: 50541
};

const connect = () => {
  const conn = net.createConnection(config);
  conn.setEncoding('utf8'); // interpret data as text

  conn.on('connect', () => {
    console.log('# Connected to server! #');
    conn.write("Name: jc🙂");
  });

  conn.on('data', (data) => {
    console.log('Server: ', data);
  });

  conn.on('end', () => {
    console.log('# Disconnected from server. #\n');
  });

  return conn;
};

module.exports = {connect};