var pic1 = localStorage.getItem("pic1");
var des1 = localStorage.getItem("des1");
var price1 = localStorage.getItem("price1");
var quant1 = localStorage.getItem("count1");
var len1 = quant1.length;
var mult1 = price1 * len1;
if(len1 !== NaN){
  $("#pic1").attr('style', 'width:100px').attr('src', pic1);
  $("#des1").html(des1);
  $("#price1").html("€" + mult1.toFixed(2) +"<br><hr><br>");
  $("#quant1").html(len1 + " (@ €69.95 each)");
}