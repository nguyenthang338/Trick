var TIME = 10000;

//Display text after 3 seconds
var helo = function(){
  console.log('Hello world');
}
//Make callback day sao
//setTimeout(helo,TIME);
// --->> setTimeout kich hoat no 1 lan . setInterval kich hoat function sau khoang thoi gian nhat dinh .. (Tru khi ban bao no stop)...
// clearInterval()
setInterval(helo,TIME)

if (TIME == 1000){
  console.log('ok');
}

//Dung la phai code nhieu thi moi co the ra van de duoc dung khong
//If you don't thinking you start codeing
