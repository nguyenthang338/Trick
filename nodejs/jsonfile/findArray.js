const items = [
  { name: 'a', content: { /* ... */ }},
  { name: 'b', content: { /* ... */ }},
  { name: 'c', content: { /* ... */ }}
]


//const b = items.find((item) => item.name === 'b');

//const b1 = items.filter((item)  => item.name === 'b').shift();
//
const b = items.reduce((result, item)  => {
  if (item.name ==='b') {
    result = item
  }
  return result;
}, null)


console.log(b);
