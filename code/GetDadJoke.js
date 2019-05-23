var http = require('http');

const baseURL = 'https://icanhazdadjoke.com/';

module.exports.function = function getDadJoke () {
  let options = {
    format: 'json',
    headers: {
      'accept': 'application/json'
    },
    cacheTime: 0
  };
  
  let response = http.getUrl(baseURL, options);
  
  return {
    id: response.id,
    joke: response.joke
  }
}
