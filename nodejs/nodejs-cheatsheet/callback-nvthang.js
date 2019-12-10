function nvthang(arg1, arg2,
  callback1,
  callback2,
  callback3
)
{
  callback1(arg1);
  callback2(arg2);
  // callback3(arg3);
}

//This //Minh co ve hieu callback function hon roi dung khong
nvthang(1, 2,(num1) => {
  console.log(num1);
}, (num2) => {
  console.log(num2);
})
