function scaryClown(){
  return new Promise( resolve => {
    setTimeout(() => {
      resolve ('async and await') ;
    }, 2000);
  })
}

async function msg() {
  const msg = await scaryClown();
  console.log('Message: ', msg);
}

msg();  //Message: <-- after 2 seconds
