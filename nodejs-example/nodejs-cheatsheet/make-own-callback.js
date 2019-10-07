function nvthang(callback){
  var helo = 'Hello callback ';
  console.log('Hello callback' + helo);
  callback(helo);
}
//Gia tri cua //Hello duoc goi ra tu day //Hello duoc goi ra tu day nvthang((k)=> { console.log(k); })
//
var demo = function (db,callback ){
  console.log(db);
    callback(db);
  nvthang((k) => {
    var log = k ; // Ba phai hoc cach su dung var in callback funtion
    //console.log(k);
    // console.log(log);
    //   callback(log);
  })
}
var db = 'vthang';
demo(db,(k) => {
  console.log(k);
})
//Dung la callback
//Dung la powerof callback function>minh can thoi gian de hieu no . dung khong nao . Welcome toi con duong cua callback fuction
  /*
demo('nvthang', (k) => {
  console.log(k);
});
*/
