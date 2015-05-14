var Turn = "X";
$("#turns").html(Turn);

$(".tiles").click(function(){
  
  $(this).html(Turn); 
  if(Turn=="X"){Turn="O"}else{Turn="X"}
  $("#turns").html(Turn);
});

/*var arrayX = []
if (Turn=X){arrayX.push(//the id number)
    }
$(this ).clone().appendTo(  );

if (arrayX//contains(the whole boolean thing)
    
    if (these three ids contain x or these 3 contain x etc)*/

$("#new").click(function(){
  $(".tiles").html("");
});