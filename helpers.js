const util = require('util');
const fs = require('fs');

const asyncReadFile = util.promisify(fs.readFile);

module.exports = { asyncReadFile };
