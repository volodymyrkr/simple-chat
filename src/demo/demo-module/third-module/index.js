const User = function (name) {
  console.log("User is created");
  this.name = name;
}

User.prototype.getUserInfo = function() {
  return {
    name: this.name,
  }
}

module.exports = User;