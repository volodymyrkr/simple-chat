function generateHtml(version) {
  var version = validateVersion(version);
  var page =
    '<html>' +
    '<head></head>' +
    '<body>' +
    '<h1>Main Page</h1>' +
    `<h3>Version <div id="version">${version}</div></h3>` +
    '<script type="text/javascript" src="./bundles/index.js">no script</script>' +
    '</body>' +
    '</html>';

  return page;
}

function validateVersion(version) {
  return (version === "0.0.0") ? "latest": version;
}

module.exports = {
  generateHtml: generateHtml,
}