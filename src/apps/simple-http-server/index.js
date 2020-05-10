const http = require('http');
const url = require('url');

const hostname = 'localhost';
const port = 8080;

console.log('Server is started...');

const server = new http.Server();
server.listen(port, hostname);

server.on(
  'connection',
  connectionHandler
)
server.on(
  'request',
  httpRequestHandler
);

server.on(
  'close',
  closeHandler
);

function connectionHandler() {
  console.log('Connection is detected.');
}

const htmlPage = `
        <!doctype>
        <html>
          <body>
            <div>Hello from server </div>
            <button class="button">Ok</button>
            <script src="/app.js"></script>
          </body>
        </html>
      `;

const appScript = `
        var button = document.querySelector('button');
        button.addEventListener('click', function() {
          alert("Button is clicked!!!");
          console.log('Button is clicked!!!');
        });
      `
function httpRequestHandler(req, res) {
  const parsedUrl = url.parse(req.url, true);
  const method = parsedUrl.pathname;

  console.log(`Request name: ${method}`);
  console.log(parsedUrl.query);
  switch(method) {
    case '/index.html':
      res.writeHead(200, { 'Content-type': 'text/html'})
      res.end(htmlPage);
      break;
    case '/app.js':
      res.writeHead(200, { 'Content-type': 'text/javascript'})
      res.end(appScript);
      break;
    default:
      res.statusCode = 404;
  }
  res.end();
}

function closeHandler() {
  console.log('Connection is closed.');
}
