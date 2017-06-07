var pic6 = localStorage.getItem("pic6");
var des6 = localStorage.getItem("des6");
var price6 = localStorage.getItem("price6");
var quant6 = localStorage.getItem("count6");
var len6 = quant6.length;
var mult6 = price6 * len6;
if(len6 !== NaN){
  $("#pic6").attr('style', 'width:100px').attr('src', pic6);
  $("#des6").html(des6);
  $("#price6").html("€" + mult6.toFixed(2) +"<br><hr><br>");
  $("#quant6").html(len6 + " (@ €79.95 each)");
}