const net = require('net');
const { IP, PORT } = require('./constraints');

const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT
  });
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });// interpret incoming data as text
  conn.setEncoding('utf8'); 
  
  conn.on('connect', () => {
    console.log('Succefully connected to game server!');
    conn.write('Name: AMA');
  });
  return conn
}

module.exports = { connect };