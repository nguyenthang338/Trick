const object1 = {
  a: 'somestring',
  b: 42,
  c: false,
  name: 'Nguyen van Thang'

}

var items = Object.keys(object1);
console.log(Object.keys(object1)); 
console.log(items);

/*
items.forEach(function (item){
  console.log(item);
})
*/

console.log(Object.values(object1)); 

console.log(Object.entries(object1));

