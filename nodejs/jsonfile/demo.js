//readFileSync(filename , [options]);
//
const jsonfile = require('jsonfile');
const file = '/tmp/data.json'

var data = jsonfile.readFileSync(file);

console.log(data);


data.person1 = 'data4';

jsonfile.writeFileSync(file, data, { spaces: 2 });
