
var timeleft = 10;
var downloadTimer = setInterval(function(){
timeleft--;
document.getElementById("countdowntimer").textContent = timeleft;
if(timeleft <= 0)
    clearInterval(downloadTimer);
},1000);




setTimeout(function(){window.location.href="index.html"},10000);




$( document ).ready(function() {
  
  localStorage.removeItem("finalCurrency");  
  localStorage.removeItem("finalFigure");
  localStorage.removeItem("email");
  localStorage.removeItem("name");
  localStorage.removeItem("surname");
  localStorage.removeItem("course");
  localStorage.removeItem("day");
  localStorage.removeItem("month");
  localStorage.removeItem("count1");
  localStorage.removeItem("count2");
  localStorage.removeItem("count3");
  localStorage.removeItem("count4");
  localStorage.removeItem("count5");
  localStorage.removeItem("count6");
  localStorage.removeItem("count7");
  localStorage.removeItem("count8");
  localStorage.removeItem("des1");
  localStorage.removeItem("des2");
  localStorage.removeItem("des3");
  localStorage.removeItem("des4");
  localStorage.removeItem("des5");
  localStorage.removeItem("des6");
  localStorage.removeItem("des7");
  localStorage.removeItem("des8");
  localStorage.removeItem("price");
  localStorage.removeItem("price1");
  localStorage.removeItem("price2");
  localStorage.removeItem("price3");
  localStorage.removeItem("price4");
  localStorage.removeItem("price5");
  localStorage.removeItem("price6");
  localStorage.removeItem("price7");
  localStorage.removeItem("price8");
  localStorage.removeItem("pic1");
  localStorage.removeItem("pic2");
  localStorage.removeItem("pic3");
  localStorage.removeItem("pic4");
  localStorage.removeItem("pic5");
  localStorage.removeItem("pic6");
  localStorage.removeItem("pic7");
  localStorage.removeItem("pic8");
});
