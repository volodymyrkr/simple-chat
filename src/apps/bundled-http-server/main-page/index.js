const generateHtml = function() {
  console.log("Genereate");

  const page =
    '<html>' +
    '<head></head>' +
    '<body>' +
    '<h1>Main Page</h1>' +
    '<h3>Version <div id="version">unknown</div></h3>' +
    '<script type="text/javascript" src="./bundles/latest/index.js" ' +
    '</body>' +
    '</html>';

  return page;
}

module.exports = {
  generateHtml: generateHtml,
}