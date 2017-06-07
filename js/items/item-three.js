var pic3 = localStorage.getItem("pic3");
var des3 = localStorage.getItem("des3");
var price3 = localStorage.getItem("price3");
var quant3 = localStorage.getItem("count3");
var len3 = quant3.length;
var mult3 = price3 * len3;
if(len3 !== NaN){
  $("#pic3").attr('style', 'width:100px').attr('src', pic3);
  $("#des3").html(des3);
  $("#price3").html("€" + mult3.toFixed(2) +"<br><hr><br>");
  $("#quant3").html(len3 + " (@ €79.95 each)");
}