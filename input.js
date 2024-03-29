// Stores the active TCP connection object.
let connection; 

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

//setupInput();

const handleUserInput = stdin.on('data', (key) => {
  if (key === "w") {
    conn.write('Move: up');
  }
  if (key === "d") {
    conn.write("Move: right");
  }
  if (key === "s") {
    conn.write("Move: down");
  }
  if (key === "a") {
    conn.write("Move: left");
  }
  if (key === '\u0003') {
    process.exit();
  }
});
return stdin;
}
module.exports = {
  setupInput
};