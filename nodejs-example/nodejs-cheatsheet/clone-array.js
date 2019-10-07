//cloning an array in ECMAScript 6 
//
let color = [ 'blue', 'green', 'red' ];

let [...clonedClored] = color;


let nvthang = {
  name: 'nvthang',
  age: 25
}

//let cloneNvthang = nvthang ;

//this is not function dung khog
console.log (nvthang.name + nvthang.age);
console.log( clonedClored);
