var pic4 = localStorage.getItem("pic4");
var des4 = localStorage.getItem("des4");
var price4 = localStorage.getItem("price4");
var quant4 = localStorage.getItem("count4");
var len4 = quant4.length;
var mult4 = price4 * len4;
if(len4 !== NaN){
  $("#pic4").attr('style', 'width:100px').attr('src', pic4);
  $("#des4").html(des4);
  $("#price4").html("€" + mult4.toFixed(2) +"<br><hr><br>");
  $("#quant4").html(len4 + " (@ €69.95 each)");
}