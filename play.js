const { setupInput } = require('./input');
const { connect } = require('./client');
const { IP, PORT } = require('./constraints');
console.log('Connecting ...');
setupInput(connect());
