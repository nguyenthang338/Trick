function action1() {
  console.log('Helo');
}
function action2(){
  console.log('Oke');
}


Promise.resolve()
  .then(() => action1())
  .then(() => action2())

const main = async () => {
  action1()
  await console.log('1000');
  action2()
}
main();
