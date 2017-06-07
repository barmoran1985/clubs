
function myMap() {
var mapOptions = {
    center: new google.maps.LatLng(53.3020654, -6.2703007),
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.HYBRID
}
var map = new google.maps.Map(document.getElementById("googleMap"), mapOptions);
}

    var priceSelected = localStorage.getItem("price");
    if(priceSelected === null){
      $("#total").html("€0.00");
    }
    else{
    $("#total").html("€" + priceSelected);
    }
