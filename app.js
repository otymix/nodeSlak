const SlackBot = require('slackbots');
const axios = require('axios');
const http = require('http');
const port=process.env.PORT || 3000


const bot = new SlackBot(
  {
  token: 'xoxb-251748679685-508062977508-U5jQnpdnNALZeLleimTIjtDo' ,
  name: ''}
);


const server = http.createServer((req, res) => {
res.statusCode = 200;
res.setHeader('Content-Type', 'text/html');
res.end('<h1>Hello oty World</h1>');
});
server.listen(port,() => {
console.log(`Server running at port `+port);
});
