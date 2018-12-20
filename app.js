const SlackBot = require('slackbots');
const axios = require('axios');
const http = require('http');
const port=process.env.PORT || 3000




const server = http.createServer((req, res) => {


  const bot = new SlackBot(
    {
    token: 'xoxp-251748679685-252811536534-507494825232-69e2f49d8c77b22e78d6c63ef38aac6a',
    name: 'mybot'
  });

res.statusCode = 200;
res.setHeader('Content-Type', 'text/html');
res.end('<h1>Hello oty :-) World</h1>');
});
server.listen(port,() => {
console.log(`Server running at port `+port);
});
