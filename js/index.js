var priceSelected = localStorage.getItem("price");
if(priceSelected === null){
  $("#total").html("");
}
else{
  $("#total").html("€" + priceSelected);
}


$("#daySelect").on('change', function(e) {
  
  var idDay = $(this).val();
  localStorage.setItem("day", idDay);
});    

$("#monthSelect").on('change', function(f) {
  
  var idMonth = $(this).val();
  localStorage.setItem("month", idMonth);
})

$("#courseSelect").on('change', function(e) {
      
  var idCourse = $(this).val();
  localStorage.setItem("course", idCourse);
    }); 

$('#button').on('click', function(){

  $('input[type="text"]').each(function(){    
    var name = $(this).attr('name');
    var value = $(this).val();
    localStorage.setItem(name, value);
    });   
});
