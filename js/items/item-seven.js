var pic7 = localStorage.getItem("pic7");
var des7 = localStorage.getItem("des7");
var price7 = localStorage.getItem("price7");
var quant7 = localStorage.getItem("count7");
var len7 = quant7.length;
var mult7 = price7 * len7;
if(len7 !== NaN){
  $("#pic7").attr('style', 'width:100px').attr('src', pic7);
  $("#des7").html(des7);
  $("#price7").html("€" + mult7.toFixed(2) +"<br><hr><br>");
  $("#quant7").html(len7 + " (@ €69.95 each)");
}