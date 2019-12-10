let fetch = require("node-fetch");

async function fetchUsers(endpoint){
  const res = await fetch(endpoint);
  let data = await res.json();

  data = data.map(user => user.username);
  console.log(data);
}

fetchUsers('https://jsonplaceholder.typicode.com/users');


// ["Bret", "Antonette", "Smaanthe", "Karianme", "Kamren", "Leopo"]
