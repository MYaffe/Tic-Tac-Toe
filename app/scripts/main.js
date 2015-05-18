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
  $('#turns').html(player);
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
      smoke.alert("You Win!", function(e){
  
}, {
  ok: "Cause I'm a Boss",
  cancel: "Nope",
  classname: "custom-class"
});
// var notification = alertify.notify('sample', 'success', 5, function(){  console.log('dismissed'); });
// return notification;
//alert("You Win!");

    }
  

  else {
    console.log('falsey');
  }}


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

$('.btn').click(function() {
  var id = this.id;
  var num = getRandomInt(1,2);
  console.log(num);

  if (num===1) {
    return myPrompt(id);
  }
  else if (num===2) {
    return myPrompt2(id);
  }
  else if (num===3) {
    return myPrompt3(id);
  }
  else if (num===4) {
    return myPrompt4(id);
  }
  else if (num===5) {
    return myPrompt5(id);
  }
  else if (num===6) {
    return myPrompt6(id);
  }
  else if (num===7) {
    return myPrompt7(id);
  }
  else if (num===8) {
    return myPrompt8(id);
  }
  else if (num===9) {
    return myPrompt9(id);
  }
  else if (num===10) {
    return myPrompt10(id);
  }
  else if (num===11) {
    return myPrompt11(id);
  }
  else if (num===12) {
    return myPrompt12(id);
  }
   else if (num===13) {
    return myPrompt13(id);
  }
  else if (num===14) {
    return myPrompt14(id);
  }
  else if (num===15) {
    return myPrompt15(id);
  }
else if (num===16) {
    return myPrompt16(id);
  }
  else if (num===17) {
    return myPrompt17(id);
  }
  else if (num===18) {
    return myPrompt18(id);
  }
 else if (num===19) {
    return myPrompt19(id);
  }
  else if (num===20) {
    return myPrompt20(id);
  }

});

var isAnswerRight;
var answer;  
var player = 'X'; 

 function myPrompt(id){
  smoke.quiz("How many grooves are there on the edge of a quarter?", function(e){
  if (e == "119"){
assignPlayerToSquare(id);
      togglePlayer();
     checkForWinner();
  }
}, {
  button_1: "119",
  button_2: "387",
  button_3: "101",
  button_4: "70",
  button_cancel: "Nothing"
});
}


// function myprompt(id) {
//   answer = prompt("How many grooves are there on the edge of a quarter?");

//   if (answer == "119") {
//     assignPlayerToSquare(id);
//           togglePlayer();
//           checkForWinner();


//$('#turns').html(player);
//});
  


function myPrompt2(id) {
    answer = prompt("What is the largest amount of American currency one can hold without having change for a dollar?");
    if (answer == "1.19") {
        assignPlayerToSquare(id);
          togglePlayer();
          checkForWinner();
 
      }
    }

    function myPrompt3(id) {
  answer = prompt("In Vermont, woman can't wear what without written permission from their husbands?");

  if (answer == "false teeth") {
    assignPlayerToSquare(id);
    togglePlayer();
    checkForWinner();
  }
}

 function myPrompt4(id) {
  answer = prompt("What did people  in the Middle Ages throw at the bride and groom?");

  if (answer == "eggs") {
    assignPlayerToSquare(id);
    togglePlayer();
    checkForWinner();
  }
}

function myPrompt5(id) {
  answer = prompt("The color orange is named after the fruit. True or False?");

  if (answer == "True") {
    assignPlayerToSquare(id);
    togglePlayer();
    checkForWinner();
  }
}

function myPrompt6(id) {
  answer = prompt("Some Turtles can breath thtough their butts. True of False?");

  if (answer == "True") {
    assignPlayerToSquare(id);
    togglePlayer();
    checkForWinner();
  }
}
function myPrompt7(id) {
  answer = prompt("You can lead a cow downstairs but not upstairs. True or False?");

  if (answer == "False") {
    assignPlayerToSquare(id);
    togglePlayer();
    checkForWinner();
  }
}
function myPrompt8(id) {
  answer = prompt("What was Google's original name?");

  if (answer == "Backrub") {
    assignPlayerToSquare(id);
    togglePlayer();
    checkForWinner();
  }
}
function myPrompt9(id) {
  answer = prompt("In which American city can you buy the McLobster?");

  if (answer == "Cape Cod") {
    assignPlayerToSquare(id);
    togglePlayer();
    checkForWinner();
  }
}
function myPrompt10(id) {
  answer = prompt("Which mucsle in the human body is only attached at one side?");

  if (answer == "Tongue") {
    assignPlayerToSquare(id);
    togglePlayer();
    checkForWinner();
  }
}
function myPrompt11(id) {
  answer = prompt("Horses fall asleep while standing. True or False?");

  if (answer == "True") {
    assignPlayerToSquare(id);
    togglePlayer();
    checkForWinner();
  }
}
function myPrompt12(id) {
  answer = prompt("Which countrey has won the most World Cups?");

  if (answer == "Brazil") {
    assignPlayerToSquare(id);
    togglePlayer();
    checkForWinner();
  }
}
function myPrompt13(id) {
  answer = prompt("Which city is home to the busiest airport in the USA?");

  if (answer == "Chicago") {
    assignPlayerToSquare(id);
    togglePlayer();
    checkForWinner();
  }
}
function myPrompt14(id) {
  answer = prompt("What name is given to half of a Byte (4 bits)??");

  if (answer == "Nibble") {
    assignPlayerToSquare(id);
    togglePlayer();
    checkForWinner();
  }
}
function myPrompt15(id) {
  answer = prompt("What is the maximum number of times a piece of paper can be folded?");

  if (answer == "Seven") {
    assignPlayerToSquare(id);
    togglePlayer();
    checkForWinner();
  }
}
function myPrompt16(id) {
  answer = prompt("Name the animal which isn't capable of jumping?");

  if (answer == "Elephant") {
    assignPlayerToSquare(id);
    togglePlayer();
    checkForWinner();
  }
}
function myPrompt17(id) {
  answer = prompt("What name is given to half of a Byte (4 bits)??");

  if (answer == "Nibble") {
    assignPlayerToSquare(id);
    togglePlayer();
    checkForWinner();
  }
}
function myPrompt18(id) {
  answer = prompt("Does the following question have any meaning? What is the meaning of life?? ");

  if (answer == "") {
    assignPlayerToSquare(id);
    togglePlayer();
    checkForWinner();
  }
}
function myPrompt19(id) {
  answer = prompt("What's faster, to New York or by train??");

  if (answer == "Pizza") {
    assignPlayerToSquare(id);
    togglePlayer();
    checkForWinner();
  }
}
function myPrompt20(id) {
  answer = prompt("Who got his umbilical cord shot of by a gang shooting?");

  if (answer == "Jr.") {
    assignPlayerToSquare(id);
    togglePlayer();
    checkForWinner();
  }
}



















$('#new').click(function(){
  $('.btn').html('');
});
