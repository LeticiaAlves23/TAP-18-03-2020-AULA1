const http = require('http');
undefined
const hostname = '127.0.0.1';
undefined
const port = 3000;
undefined
const server = http.createServer((req,res) => {     res.statusCode = 200;                              res.setHeader('Content-Type', 'text/plain');       res.end('Hello World');                         });
undefined
server.listen(port, hostname, () => {                console.log('Server running at http://${hostname}:${port}/' );                                             });
Server {
  insecureHTTPParser: undefined,
  _events: [Object: null prototype] {
    request: [Function],
    connection: [Function: connectionListener],
    listening: [Function: bound onceWrapper] { listener: [Function] }
  },
  _eventsCount: 3,
  _maxListeners: undefined,
  _connections: 0,
  _handle: null,
  _usingWorkers: false,
  _workers: [],
  _unref: false,
  allowHalfOpen: true,
  pauseOnConnect: false,
  httpAllowHalfOpen: false,
  timeout: 120000,
  keepAliveTimeout: 5000,
  maxHeadersCount: null,
  headersTimeout: 40000,
  [Symbol(IncomingMessage)]: [Function: IncomingMessage],
  [Symbol(ServerResponse)]: [Function: ServerResponse],
  [Symbol(kCapture)]: false,
  [Symbol(asyncId)]: -1
}