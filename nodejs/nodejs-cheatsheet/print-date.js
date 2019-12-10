let TIME = 500;
var date = new Date();
var i = 0;
var nvthang  = function () {
  i++;
  if (i % 2 === 0){
    console.log ( date + '\t \t \t \t \t \t ');
  } else {
    console.log ('\t\t\t\t\t\t   \t\t\t\t\t' + date) ;
  }

}
setInterval(nvthang,TIME);
