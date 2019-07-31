const net = require('net');

const connect = function() {
  const conn = net.createConnection({ 
    host: 'localhost',
    port: 50541
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