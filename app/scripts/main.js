var $1 = $('#1');
var $2 = $('#2');
var $3 = $('#3');
var $4 = $('#4');
var $5 = $('#5');
var $6 = $('#6');
var $7 = $('#7');
var $8 = $('#8');
var $9 = $('#9');



var player = 'X';

function togglePlayer() {
  player = player === 'X' : 'O' : 'X';
}

$('#turns').html(player);

$('.tiles').click(function() {
  $(this).html(player);
  checkForWinner();
  togglePlayer();
  $('#turns').html(player);
});


function checkForWinner() {
  console.log('checkForWinner');
  var first = $('#1').html();
  if (first) {
    if (first === $('#2').html() && first === $('#3').html()) {
      $('.congratulate').html(first + ' is the winner' );
    }
  }
  else {
    console.log('first is falsey');
  }
}

$('#new').click(function(){
  $('.tiles').html('');
});