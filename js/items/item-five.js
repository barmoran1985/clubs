var pic5 = localStorage.getItem("pic5");
var des5 = localStorage.getItem("des5");
var price5 = localStorage.getItem("price5");
var quant5 = localStorage.getItem("count5");
var len5 = quant5.length;
var mult5 = price5 * len5;
if(len5 !== NaN){
  $("#pic5").attr('style', 'width:100px').attr('src', pic5);
  $("#des5").html(des5);
  $("#price5").html("€" + mult5.toFixed(2) +"<br><hr><br>");
  $("#quant5").html(len5 + " (@ €69.95 each)");
}