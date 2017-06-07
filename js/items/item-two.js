var pic2 = localStorage.getItem("pic2");
var des2 = localStorage.getItem("des2");
var price2 = localStorage.getItem("price2");
var quant2 = localStorage.getItem("count2");
var len2 = quant2.length;
var mult2 = price2 * len2;
if(len2 !== NaN){
  $("#pic2").attr('style', 'width:100px').attr('src', pic2);
  $("#des2").html(des2);
  $("#price2").html("€" + mult2.toFixed(2) +"<br><hr><br>");
  $("#quant2").html(len2 + " (@ €79.95 each)");
}