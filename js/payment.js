if( localStorage.getItem("finalCurrency") ) {
    var final = localStorage.getItem('finalCurrency');
    var figure = localStorage.getItem('finalFigure');
    $("#displayFinal").html("Total Amount: " + final + " " + figure);
}
else {
    var final = localStorage.getItem('price');  
    $("#displayFinal").html("Total Amount: €" + final);
}
