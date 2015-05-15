var one = $('#1');
var two = $('#2');
var three = $('#3');
var four = $('#4');
var five = $('#5');
var six = $('#6');
var seven = $('#7');
var eight = $('#8');
var nine = $('#9');


var player = 'X';

function togglePlayer() {
  player = player === 'X' ? 'O' : 'X';
}

$('#turns').html(player);
$('.btn').click(function() {
 $(this).html(player)
  if (this==one){
    (one).html(player)
  }
  if (this==two){
    (two).html(player)
  } 
  if (this==three){
    (three).html(player)
  }
   if (this==four){
    (four).html(player)
  }
   if (this==five){
    (five).html(player)
  }
   if (this==six){
    (six).html(player)
  }
   if (this==seven){
    (seven).html(player)
  }
   if (this==eight){
    (eight).html(player)
  }
   if (this==nine){
    (nine).html(player)
  }
  checkForWinner();
console.log(one.html());
console.log(two.html());
console.log(three.html());

  togglePlayer();

  $('#turns').html(player);
});



function checkForWinner() {
      if((one.html() === two.html() && two.html() === three.html() && one.html() !== "")||
         (four.html() === five.html() && five.html() === six.html() && four.html() !== "")||
         (seven.html() === eight.html() && eight.html() === nine.html() && seven.html() !== "")||
         (one.html() === four.html() && four.html() === seven.html() && one.html() !== "")||
         (two.html() === five.html() && five.html() === eight.html() && two.html() !== "")||
         (three.html() === six.html() && six.html() === nine.html() && three.html() !== "")||
         (one.html() === five.html() && five.html() === nine.html() && one.html() !== "")||
         (three.html() === five.html() && five.html() === seven.html() && three.html() !== "") 
        )

{
      $('.congratulate').html(player + ' is the winner' );
      console.log('you win');
    }
  

  else {
    console.log('falsey');
  }}


$('#new').click(function(){
  $('.btn').html('');
});