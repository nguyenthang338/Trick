var d = [
  {
    "name": "HTML",
    "description": "Hyper Text Markup Language"
  },
  {
    "name": "CSS",
    "description": "Cascading Style Sheet"
  },
  {
    "name": "JS",
    "description": "Javascript"
  }
];

var a = d.filter(function(el) {
  return el.name === 'CSS';
});

console.log(a);
