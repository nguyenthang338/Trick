/*
 * This is http request . authenticaiton basic
 */
const request = require('request');

var options = {
    url: 'https://mockbin.com/request',
    auth: {
            username: 'ScottWRobinson',
            password: 'myPassword'
        }
};

request.get(options);
