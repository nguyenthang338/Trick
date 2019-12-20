//readFileSync(filename , [options]);
//
const jsonfile = require('jsonfile');
const file = '/tmp/data.json'

var data = jsonfile.readFileSync(file);

var filter = Object.entries(data).filter((data) => {
  return data.class_id == 2;
});
console.log(filter);



