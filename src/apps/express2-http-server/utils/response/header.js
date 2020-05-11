const Header = function(title) {
  this.title = title;
}

Header.prototype.getTitle = function() {
  return this.title;
}

Header.prototype.getTitleInTag = function(tag) {
  return `<${tag}>${this.title}</${tag}>`;
}

module.exports = Header;

