/*
The first argument to request can either be a URL string, or an object of options. Here are some of the more common options you'll encounter in your applications:

url: The destination URL of the HTTP request
method: The HTTP method to be used (GET, POST, DELETE, etc)
headers: An object of HTTP headers (key-value) to be set in the request
form: An object containing key-value form data
*/

const request = require('request');

const options = {
  url: 'https://www.reddit.com/r/funny.json',
  method: 'GET',
  headers: {
    'Accept': 'application/json',
    'Accept-Charset': 'utf-8',
    'User-Agent': 'my-reddit-client'
  }
};

request(options, function(err, res, body) {
  let json = JSON.parse(body);
  console.log(json);
});

/*Here are a few of the more commonly used ones: */

request.get(options, callback)
request.post(options, callback)
request.head(options, callback)
request.delete(options, callback)


/*While this won't save you a ton of lines of code, it will at least make your code a bit easier to understand by allowing you to just look at the method being called and not having to parse through all of the various options to find it. */
