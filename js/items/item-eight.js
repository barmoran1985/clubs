var pic8 = localStorage.getItem("pic8");
var des8 = localStorage.getItem("des8");
var price8 = localStorage.getItem("price8");
var quant8 = localStorage.getItem("count8");
var len8 = quant8.length;
var mult8 = price8 * len8;
if(len8 !== NaN){
$("#pic8").attr('style', 'width:100px').attr('src', pic8);
$("#des8").html(des8);
$("#price8").html("€" + mult8.toFixed(2) +"<br><hr><br>");
$("#quant8").html(len8 + " (@ €79.95 each)");
}