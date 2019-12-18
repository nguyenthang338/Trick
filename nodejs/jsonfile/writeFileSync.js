//writeFileSync(filename,obj,[options]);

const jsonfile = require('jsonfile');
const file = '/tmp/data.json';
const obj = { oke: 'nvthang' };

obj.name = 'nguyen van thang';
obj.data = '25tuoi'
jsonfile.writeFileSync(file,obj, { space: 2});


