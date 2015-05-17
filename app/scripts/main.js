var one = $('#1');
var two = $('#2');
var three = $('#3');
var four = $('#4');
var five = $('#5');
var six = $('#6');
var seven = $('#7');
var eight = $('#8');
var nine = $('#9');


function assignPlayerToSquare(id) {
  console.log(id);
  if (id == '1') {
    return (one).html(player)
  }
  if (id=='2'){
    return(two).html(player)
  } 
  if (id=='3'){
    return(three).html(player)
  }
   if (id=='4'){
    return(four).html(player)
  }
   if (id=='5'){
   return (five).html(player)
  }
   if (id=='6'){
    return(six).html(player)
  }
   if (id=='7'){
    return(seven).html(player)
  }
   if (id=='8'){
    return(eight).html(player)
  }
   if (id=='9'){
    return(nine).html(player)
  }
}


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


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

$('.btn').click(function() {
  var id = this.id;
  var num = getRandomInt(1, 7);

  if (num>0&&num<4) {
    return myPrompt(id);
  }
  else if (num>5&&num<8) {
    return myPromptTwo(id);
  }
});

var isAnswerRight;
var person;  
var player = 'X'; 

function myPrompt(id) {
  person = prompt("Please enter your name", "Harry Potter");

  if (person == "Joe") {
      //document.getElementById("demo").innerHTML =
     // "Hello " + person + "! How are you today?";
      // isAnswerRight="yes";
      //         console.log(isAnswerRight)

      //     $('#turns').html(player);
      //     $('.btn').click(function() {
      //     $(this).html(player)
       //the last line doesn't make the statement "one.html()=x/o" true. Strange...
    assignPlayerToSquare(id);
          togglePlayer();
          checkForWinner();


//$('#turns').html(player);
//});
  }
  else   {
  //   isAnswerRight="no"
  // console.log(isAnswerRight)

  }
}


var person;   
function myPromptTwo(id) {
    person = prompt("Please enter your name", "Mendel The Man");
    if (person == "Moe") {
        assignPlayerToSquare(id);
          togglePlayer();
          checkForWinner();

       // // document.getElementById("demo").innerHTML =
       // // "Hello " + person + "Prompt number 2? Awesome!";
       //       isAnswerRight="yes";
       //               console.log(isAnswerRight)

       //     // $('#turns').html(player);
       //      $('.btn').click(function() {
       //      //$(this).html(player)
       //   //the last line doesn't make the statement "one.html()=x/o" true. Strange...
       //      assignPlayerToSquare();
       //      checkForWinner();
       //      togglePlayer();

  //$('#turns').html(player);
//});
 
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
