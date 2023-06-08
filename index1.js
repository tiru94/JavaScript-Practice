var http = require('http');
var fs = require('fs');

var server = http.createServer((req, res) => {
  var abc = req.url;

  if (abc.indexOf('hello1') > 0) {
    fs.readFile('hello1.html', (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end('Internal Server Error');
      } else {
        res.setHeader('Content-Type', 'text/html');
        res.end(data);
      }
    });
  } else if (abc.indexOf('hello2') > 0) {
    fs.readFile('hello2.html', (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end('Internal Server Error');
      } else {
        res.setHeader('Content-Type', 'text/html');
        res.end(data);
      }
    });
  } else if (abc.indexOf('style') > 0) {
    fs.readFile('style.css', (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end('Internal Server Error');
      } else {
        res.setHeader('Content-Type', 'text/css');
        res.end(data);
      }
    });
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

server.listen(9000, () => {
  console.log('Server is listening on port 9000');
});
