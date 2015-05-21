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
  var num = getRandomInt(1,21);
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
  button_4: "70",
  button_cancel: "Nothing"
});
}

function myPrompt2(id) {
        smoke.quiz("What is the largest amount of American currency one can hold without having change for a dollar?", function(e){
  if (e == "1.19"){
assignPlayerToSquare(id);
      togglePlayer();
     checkForWinner();
  }
}, {
  button_1: "1.19",
  button_2: ".79",
  button_4: ".99",
  button_cancel: "Nothing"
});
}

    function myPrompt3(id) {
smoke.quiz("In Vermont, woman can't wear what without written permission from their husbands?", function(e){
  if (e == "false teeth"){
assignPlayerToSquare(id);
      togglePlayer();
     checkForWinner();
  }
}, {
  button_1: "Chastisty belt",
  button_2: "nothing",
  button_3: "false teeth",
  button_cancel: "Nothing"
});
}

 function myPrompt4(id) {
smoke.quiz("What did people  in the Middle Ages throw at the bride and groom?", function(e){
  if (e == "eggs"){
assignPlayerToSquare(id);
      togglePlayer();
     checkForWinner();
  }
}, {
  button_1: "flowers",
  button_2: "eggs",
  button_3: "dehydrated chicken poop",
  button_cancel: "Nothing"
});
}

function myPrompt5(id) {
smoke.quiz("The color orange is named after the fruit.", function(e){
  if (e == "True"){
assignPlayerToSquare(id);
      togglePlayer();
     checkForWinner();
  }
}, {
  button_1: "True",
  button_2: "False",
  button_cancel: "Nothing"
});
}

function myPrompt6(id) {
smoke.quiz("Some Turtles can breath thtough their butts.", function(e){
  if (e == "True"){
assignPlayerToSquare(id);
      togglePlayer();
     checkForWinner();
  }
}, {
  button_1: "True",
  button_2: "False",
  button_cancel: "Nothing"
});
}
function myPrompt7(id) {
smoke.quiz("Which statement is true? You can lead a cow downstairs but not upstairs. You can lead a cow upstairs but not downstairs.", function(e){
  if (e == "A"){
assignPlayerToSquare(id);
      togglePlayer();
     checkForWinner();
  }
}, {
  button_1: "A",
  button_2: "B",
  button_cancel: "Nothing"
});
}

function myPrompt8(id) {
smoke.quiz("What was Google's original name?", function(e){
  if (e == "Backrub"){
assignPlayerToSquare(id);
      togglePlayer();
     checkForWinner();
  }
}, {
  button_1: "Wackify",
  button_2: "Backrub",
  button_3: "2Immigrants",
  button_cancel: "Nothing"
});
}

function myPrompt9(id) {
smoke.quiz("In which American city can you buy the McLobster?", function(e){
  if (e == "Cape Cod"){
assignPlayerToSquare(id);
      togglePlayer();
     checkForWinner();
  }
}, {
  button_1: "New Orleans",
  button_2: "Portland",
  button_3: "Cape Cod",
  button_cancel: "Nothing"
});
}

function myPrompt10(id) {
smoke.prompt("Which muscle in the human body is attached at only one side?", function(e){
  if (e=="Tongue"){
 assignPlayerToSquare(id);
    togglePlayer();
  checkForWinner();
  }else{
  
  }
}, {
  ok: "Yes",
  cancel: "No",
  classname: "custom-class",
  reverseButtons: true,
  value: "existential dread"
});
}

function myPrompt11(id) {
smoke.quiz("Horses fall asleep while standing.", function(e){
  if (e == "True"){
assignPlayerToSquare(id);
      togglePlayer();
     checkForWinner();
  }
}, {
  button_1: "True",
  button_2: "False",
  button_cancel: "Nothing"
});
}

function myPrompt12(id) {
smoke.quiz("Which country has won the most World Cups?", function(e){
  if (e == "Brazil"){
assignPlayerToSquare(id);
      togglePlayer();
     checkForWinner();
  }
}, {
  button_1: "Germany",
  button_2: "Argentina",
  button_3: "Brazil",
  button_cancel: "Nothing"
});
}

function myPrompt13(id) {
smoke.quiz("What city is home to the busiest Airport in the USA", function(e){
  if (e == "Chicago"){
assignPlayerToSquare(id);
      togglePlayer();
     checkForWinner();
  }
}, {
  button_1: "Atlanta",
  button_2: "Chicago",
  button_3: "NYC",
  button_4: "L.A",
  button_cancel: "Nothing"
});
}

function myPrompt14(id) {
smoke.prompt("What name is given to half of a Byte (4 bits)???", function(e){
  if (e=="Nibble"){
 assignPlayerToSquare(id);
    togglePlayer();
  checkForWinner();
  }else{
  
  }
}, {
  ok: "Yes",
  cancel: "No",
  classname: "custom-class",
  reverseButtons: true,
  value: "Come on ... Think!!"

});
}


function myPrompt15(id) {
smoke.quiz("What is the maximum number of times a piece of paper can be folded?", function(e){
  if (e == "Seven"){
assignPlayerToSquare(id);
      togglePlayer();
     checkForWinner();
  }
}, {
  button_1: "Seven",
  button_2: "Eight",
  button_3: "Six",
  button_cancel: "Nothing"
});
}

function myPrompt16(id) {
smoke.prompt("Name the animal which isn't capable of jumping?", function(e){
  if (e=="Elephant"){
 assignPlayerToSquare(id);
    togglePlayer();
  checkForWinner();
  }else{
  
  }
}, {
  ok: "Yes",
  cancel: "No",
  classname: "custom-class",
  reverseButtons: true,
  value: "Come on ... Think!!"
});
}

function myPrompt17(id) {
smoke.prompt("What name is given to half of a Byte (4 bits)??", function(e){
  if (e=="Nibble"){
 assignPlayerToSquare(id);
    togglePlayer();
  checkForWinner();
  }else{
  
  }
}, {
  ok: "Yes",
  cancel: "No",
  classname: "custom-class",
  reverseButtons: true,
  value: "Come on ... Think!!"
});
}

function myPrompt18(id) {
smoke.prompt("Does the following question have any meaning? What is the meaning of life???", function(e){
  if (e=="No"){
 assignPlayerToSquare(id);
    togglePlayer();
  checkForWinner();
  }else{
  
  }
}, {
  ok: "Yes",
  cancel: "No",
  classname: "custom-class",
  reverseButtons: true,
  value: "Come on ... Think!!"
});
}

function myPrompt19(id) {
smoke.quiz("What's faster, to New York or by train??", function(e){
  if (e == "Pizza"){
assignPlayerToSquare(id);
      togglePlayer();
     checkForWinner();
  }
}, {
  button_1: "Ice Cream",
  button_2: "Pizza",
  button_3: "Lampoons",
  button_cancel: "Nothing"
});
}

function myPrompt20(id) {
smoke.prompt("How many GA campuses exist on planet earth?", function(e){
  if (e=="12"){
 assignPlayerToSquare(id);
    togglePlayer();
  checkForWinner();
  }else{
  
  }
}, {
  ok: "Yes",
  cancel: "No",
  classname: "custom-class",
  reverseButtons: true,
  value: "Come on ... Think!!"
});
}



















$('#new').click(function(){
  $('.btn').html('');
});
