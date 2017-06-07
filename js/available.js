function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Chrome, Safari and Opera 
    document.documentElement.scrollTop = 0; // For IE and Firefox
}

localStorage.removeItem("finalCurrency");
localStorage.removeItem("finalFigure");
localStorage.removeItem("count1");
localStorage.removeItem("count2");
localStorage.removeItem("count3");
localStorage.removeItem("count4");
localStorage.removeItem("count5");
localStorage.removeItem("count6");
localStorage.removeItem("count7");
localStorage.removeItem("count8");


var totalPrice = 0;

$(".button-basket").on("click", function() {
  var price = $(this).attr("data-price")
  totalPrice += parseFloat(price);
    $('.total-basket').html("€" + totalPrice.toFixed(2)); 
})



$("#one").on('click', function() {
  var current1 = localStorage.getItem('count1');
  if(current1 === NaN){
    localStorage.setItem('count1', 1);
  }
  else{
    current1 += 1;
    localStorage.setItem('count1', current1);
  }
  
  localStorage.setItem("pic1", 'images/mensLeft.png');
  localStorage.setItem("des1", 'Callaway 22 Irons - X Series Driver & Woods - Putter & Bag Code:11RG Gents Right-Handed');
  localStorage.setItem("price1", '69.95');
})

$("#two").on('click', function() {
  var current2 = localStorage.getItem('count2');
  if(current2 === NaN){
    localStorage.setItem('count2', 1);
  }
  else{
    current2 += 1;
    localStorage.setItem('count2', current2);
  }
  
  localStorage.setItem("pic2", 'images/mensRight.png');
  localStorage.setItem("des2", 'Gents Left-Handed Callaway G2 Irons - G5 Driver & Woods - Putter & Bag (Code:3LG) Gents Left-Handed');
  localStorage.setItem("price2", '79.95');
})

$("#three").on('click', function() {
  var current3 = localStorage.getItem('count3');
  if(current3 === NaN){
    localStorage.setItem('count3', 1);
  }
  else{
    current3 += 1;
    localStorage.setItem('count3', current3);
  }
  
  localStorage.setItem("pic3", 'images/ladiesLeft.png');
  localStorage.setItem("des3", 'Ladies Left-Handed Taylormade Burner Irons - R9 Driver & Woods - Putter & Bag (Code:2LG) Ladies Left-Handed');
  localStorage.setItem("price3", '79.95');
})

$("#four").on('click', function() {
  var current4 = localStorage.getItem('count4');
  if(current4 === NaN){
    localStorage.setItem('count4', 1);
  }
  else{
    current4 += 1;
    localStorage.setItem('count4', current4);
  }
  
  localStorage.setItem("pic4", 'images/ladiesRight.png');
  localStorage.setItem("des4", 'Ladies Ping RBZ Irons, Hybrids and Woods - Putter & Bag (1RL) Ladies Right-Handed');
  localStorage.setItem("price4", '69.95');
})

$("#five").on('click', function() {
  var current5 = localStorage.getItem('count5');
  if(current5 === NaN){
    localStorage.setItem('count5', 1);
  }
  else{
    current5 += 1;
    localStorage.setItem('count5', current5);
  }
  
  localStorage.setItem("pic5", 'images/mensRight.png');
  localStorage.setItem("des5", 'Callaway Burner OS Graphite Irons - R11 Senior Shaft Driver, Reg Woods, Rescue - Putter & Bag (29RG)Gents Right-Handed');
  localStorage.setItem("price5", '69.95');
})

$("#six").on('click', function() {
  var current6 = localStorage.getItem('count6');
  if(current6 === NaN){
    localStorage.setItem('count6', 1);
  }
  else{
    current6 += 1;
    localStorage.setItem('count6', current6);
  }
  
  localStorage.setItem("pic6", 'images/mensLeft.png');
  localStorage.setItem("des6", 'Gents Left-Handed Callaway X Series Irons - X Hot Pro Reg Shaft Driver, Wood, Rescue - Putter & Bag(6LG)Gents Left-Handed');
  localStorage.setItem("price6", '79.95');
})

$("#seven").on('click', function() {
  var current7 = localStorage.getItem('count7');
  if(current7 === NaN){
    localStorage.setItem('count7', 1);
  }
  else{
    current7 += 1;
    localStorage.setItem('count7', current7);
  }
  
  localStorage.setItem("pic7", 'images/ladiesRight.png');
  localStorage.setItem("des7", 'Ladies Ping Solaire 8 Piece Set (Right-Handed) (6RL)Ladies Right-Handed');
  localStorage.setItem("price7", '69.95');
})

$("#eight").on('click', function() {
  var current8 = localStorage.getItem('count8');
  if(current8 === NaN){
    localStorage.setItem('count8', 1);
  }
  else{
    current8 += 1;
    localStorage.setItem('count8', current8);
  }
  
  localStorage.setItem("pic8", 'images/ladiesLeft.png');
  localStorage.setItem("des8", 'Ladies Left-Handed TaylorMade X Series Irons - X Hot Pro Reg Shaft Driver, Wood, Rescue - Putter &Bag (6LG)Ladies Left-Handed');
  localStorage.setItem("price8", '79.95');
})



$(".toCart").on("click", function() {

      localStorage.setItem("price", totalPrice.toFixed(2));
})


$.ajax({
  url: 'https://api.fixer.io/latest',
  dataType: "json"
});

window.onscroll = function() {scrollFunction()};





