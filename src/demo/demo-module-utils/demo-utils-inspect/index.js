const util = require('util');

module.exports = function(module) {
  return function() {
    const moduleDescription = util.inspect(module);
    console.log(moduleDescription);
  }
}