var one = $('#1');
var two = $('#2');
var three = $('#3');
var four = $('#4');
var five = $('#5');
var six = $('#6');
var seven = $('#7');
var eight = $('#8');
var nine = $('#9');


function assignPlayerToSquare() {
  //if (isAnswerRight=="yes"){
    if (this==one){
    (one).html(player)
    console.log("one was clicked")
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
  }}


  function togglePlayer() {
  player = player === 'X' ? 'O' : 'X';
}

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

var num;
function getRandomInt(min, max) {
num=Math.floor(Math.random() * (max - min)) + min;
}

$('.btn').click(function() {
        getRandomInt(1, 6);
        if (num>0&&num<3) {
        return myPrompt(num);
    }
    if (num>2&&num<7) {
        return myPromptTwo(num);
    }
  });


var isAnswerRight;
var person;  
var player = 'X'; 
function myPrompt(num) {
    person = prompt("Please enter your name", "Harry Potter");
    if (person == "Joe") {
        //document.getElementById("demo").innerHTML =
       // "Hello " + person + "! How are you today?";
        isAnswerRight="yes";
                console.log(isAnswerRight)
                console.log(player)

            $('#turns').html(player);
            $('.btn').click(function() {
            $(this).html(player)
         //the last line doesn't make the statement "one.html()=x/o" true. Strange...
            assignPlayerToSquare();
            checkForWinner();
            togglePlayer();

  //$('#turns').html(player);
});
 }

        else   {
          isAnswerRight="no"
        console.log(isAnswerRight)

        }
    }


var person;   
function myPromptTwo(num) {
    person = prompt("Please enter your name", "Mendel The Man");
    if (person == "Moe") {
       // document.getElementById("demo").innerHTML =
       // "Hello " + person + "Prompt number 2? Awesome!";
             isAnswerRight="yes";
                     console.log(isAnswerRight)

            $('#turns').html(player);
            $('.btn').click(function() {
            $(this).html(player)
         //the last line doesn't make the statement "one.html()=x/o" true. Strange...
            assignPlayerToSquare();
            checkForWinner();
            togglePlayer();

  //$('#turns').html(player);
});
 
      }

        else  {
          isAnswerRight="no"
        console.log(isAnswerRight)

        }
    }
  






/*else{
  togglePlayer();
}
*/




/*$('#new').click(function(){
  $('.btn').html('');
});*/
