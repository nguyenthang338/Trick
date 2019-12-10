
//Default is method request is 'GET'
const request = require('request');

request('http://stackabuse.com', function(err, res, body) {
    console.log(body);
});

