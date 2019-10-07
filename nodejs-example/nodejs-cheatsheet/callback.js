function doHomework(subject, callback) {
  console.log(`Starting my ${subject} homework.`);
  callback();
}

doHomework('math', function() {
  console.log('Finished my homework');
});

function helloworld(){
  console.log("nvthang");
}
function meocon(){
  console.log("meocon");
}
function chocon(){
  console.log("chocon");
}

//Everything is Object , syntax is callback dung khong.su Dung callabck nhu the nao . cung quan trong day nay
function homworl(callback, callback1){
  var nvthang = 'Meo con';
  callback(nvthang);
  callback1();
}

//Dug la call back function. that la kho choi
homworl(function(k){
  console.log(k)
},() => {
  console.log('Hello world');
});
