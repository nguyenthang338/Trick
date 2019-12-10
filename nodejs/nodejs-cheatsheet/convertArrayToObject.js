var array = [ 'blue', 'green', 'red' ];


//es5 medthod . dung khong
var nvthang = Object.assign({}, array);
console.log(nvthang);

var {...object} = array;

console.log (object);

// Array function . That la ba dao . day nhi
let Arraynvthang  = Object.keys(object).map((k) => nvthang[k] )

console.log (Arraynvthang);
