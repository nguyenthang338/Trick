
//List all Object function


console.log('List all Object function');
let method = Object.getOwnPropertyNames(Object).filter(function (p){
 return typeof Object[p] === 'function';
});

console.log(method);


//let method = Object.getOwnPropertyNames(Array.protype)

//List all array function
console.log('List all Array function');
console.log(Object.getOwnPropertyNames(Array.prototype));

//List all Set function
console.log('List all Set function');
console.log(Object.getOwnPropertyNames(Set.prototype));
console.log()

//List all Map function
console.log('List all Map function');
console.log(Object.getOwnPropertyNames(Map.prototype));

//List all String function
console.log('List all String function');
console.log(Object.getOwnPropertyNames(String.prototype));
