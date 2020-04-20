module.exports = function(module) {
  return function(data) {
    console.log(module.filename, data.toString());
  }
}