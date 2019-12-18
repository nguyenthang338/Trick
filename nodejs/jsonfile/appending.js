//You can use fs.writeFileSync option { flag: 'a' } to achieve this.
//
const jsonfile = require('jsonfile');
const file = '/tmp/data.json';
const obj = { name: 'Jp'};

var result  = jsonfile.writeFileSync(file, obj , { spaces: 2, EOL: '\r\n'});

console.log(result);


