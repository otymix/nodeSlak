const SlackBot = require('slackbots');
const axios = require('axios');
const http = require('http');
const port=process.env.PORT || 3000

var express = require('express');
var app = express();

const bot = new SlackBot(
  {
  token: process.env.SLACK_TOKEN,

  name: 'AF ACE BOT'
});
/*
// Make a request for a user with a given ID
axios.get('/webhook')
  .then(function (response) {
    // handle success
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>This is the webhook Endpoint </h1>');
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
*/




/*
const server = http.createServer((req, res) => {

res.statusCode = 200;
res.setHeader('Content-Type', 'text/html');
res.end('Hi I was just here, please call me Louis 🤖');


});
server.listen(port,() => {
console.log(`Server running at port `+port);
});
*/

const server = http.createServer((req, res) => {

console.log('ici la req :');
console.log(req)
res.statusCode = 200;
res.setHeader('Content-Type', 'text/html');
res.end('Hi I was just here, please call me Louis 🤖');


});
server.listen(port,() => {
console.log(`Server running at port `+port);
});


app.get('/', function(req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('Hi I was just here, please call me Louis 🤖');
});


app.post("/ranti", function(req, res, next) {
    let payload = req.body;
    res.sendStatus(200);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('Hi I was RANTI, please call me Louis 🤖');

});








  // Start Handler
bot.on('start', () => {
  const params = {
    icon_emoji: ':smiley:'
  };

  bot.postMessageToChannel(
    'general',
    'Get Ready To Laugh With @Jokebot!',
    params
  );
});

// Error Handler
bot.on('error', err => console.log(err));

// Message Handler
bot.on('message', data => {
  if (data.type !== 'message') {
    return;
  }

  handleMessage(data.text);
});

// Respons to Data
function handleMessage(message) {
  if (message.includes(' chucknorris')) {
    chuckJoke();
  } else if (message.includes(' yomama')) {
    yoMamaJoke();
  } else if (message.includes(' random')) {
    randomJoke();
  } else if (message.includes(' help')) {
    runHelp();
  }
}

// Tell a Chuck Norris Joke
function chuckJoke() {
  axios.get('http://api.icndb.com/jokes/random').then(res => {
    const joke = res.data.value.joke;

    const params = {
      icon_emoji: ':laughing:'
    };

    bot.postMessageToChannel('general', `Chuck Norris: ${joke}`, params);
  });
}

// Tell a Yo Mama Joke
function yoMamaJoke() {
  axios.get('http://api.yomomma.info').then(res => {
    const joke = res.data.joke;

    const params = {
      icon_emoji: ':laughing:'
    };

    bot.postMessageToChannel('general', `Yo Mama: ${joke}`, params);
  });
}

// Tell a Random Joke
function randomJoke() {
  const rand = Math.floor(Math.random() * 2) + 1;
  if (rand === 1) {
    chuckJoke();
  } else if (rand === 2) {
    yoMamaJoke();
  }
}

// Show Help Text
function runHelp() {
  const params = {
    icon_emoji: ':question:'
  };

  bot.postMessageToChannel(
    'general',
    `Type @jokebot with either 'chucknorris', 'yomama' or 'random' to get a joke`,
    params
  );
  }

  //ADDED FROM GIT LIB
