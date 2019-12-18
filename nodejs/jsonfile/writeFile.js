const jsonfile = require('jsonfile')

const file = '/tmp/data.json'

const obj = { name: 'JP'};

//Write file with promises . The Readfile method will return a promise if you do not pass a callback function.
jsonfile.writeFile(file , obj)
  .then(res => {
    console.log('write complete') ;
  })
 .catch(error => console.error(error))
