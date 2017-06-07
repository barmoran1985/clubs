
  $.ajax({
  url: '../golfCourses.json',
  dataType: 'json'
})
.success( function(data) {

  $.each( data, function( index, elem ) {
    var coursePick = localStorage.getItem("course");
    var a = elem.name;
    var b = elem.description;
    var c = elem.image;
    if(a === coursePick){
      $("#coursePic").attr('src', c);
      $("#name").html(a);
      $("#description").html(b);
    }

  });
  
})


var course = localStorage.getItem("course");
var day = localStorage.getItem("day");
var month = localStorage.getItem("month");
var name = localStorage.getItem("name")
var nameCap = name.toLowerCase().replace(/\b[a-z]/g, function(letter) {
    return letter.toUpperCase();
});



var surname = localStorage.getItem("surname")
var surnameCap = surname.toLowerCase().replace(/\b[a-z]/g, function(letter) {
    return letter.toUpperCase();
});



var email = localStorage.getItem("email")
$("#timeDate").html("Once payment is received, your clubs will be delivered to " + course + " prior to 8am on " + day + " " + month + ".");
$("#detailCustomer").html("Name: " + nameCap + " " + surnameCap + "<br> Email: " + email);
    

var priceSelected = localStorage.getItem("price");
$("#total").html("€" + priceSelected);
$(".cart-total").html("€" + priceSelected);



var idFX;
$("#currencySelect").on('change', function(e) {
  e.preventDefault();
  idFX = $(this).val();
  var urlFX = "https://api.fixer.io/latest?symbols=" + idFX;

  console.log(urlFX);

  $.ajax({
    url: urlFX,
    dataType: 'json'
  })
  .success(function(dataFX) {
    console.log(dataFX);
    var rate = dataFX.rates[idFX];
    var finalPrice = priceSelected * rate;
    var roundedFinalPrice = Math.round(finalPrice * 100) / 100;
    $("#currencyTotal").html(Object.keys(dataFX.rates) + " " + roundedFinalPrice + "");
      localStorage.setItem("finalCurrency", Object.keys(dataFX.rates));
      localStorage.setItem("finalFigure", roundedFinalPrice.toFixed(2));

    });
  });