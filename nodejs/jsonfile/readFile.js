//The readfile method will return a promise if you do not pass a callback funtion.
//
const jsonfile = require('jsonfile');

const file = '/tmp/data.json';
jsonfile.readFile(file)
  .then(obj => console.log(obj))
  .catch(error => console.error(error));


