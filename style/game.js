$(document).ready(function(){
  $('.img').on('dragstart', function(event) { event.preventDefault(); });

var play = $(".play");
  var playerScore = 0;
  //set selectors
  var timer = $(".timer");
  var score = $(".score");
  var img = $(".img");
  var imgSize = $(".size");
 var restart = $(".restart");
var timerPause = false;
//TIMER
var timeLeft = 30; //120 seconds timer for player
setInterval( function countDown(){
  if(timerPause ==true){

timeLeft --;
}
if(timeLeft==0)
{
  timeLeft =30;
  playerScore = 0;
  modal.style.display = "block";
  clearInterval(interval);

}
else {
  timer.html("<b>Timer: "+ timeLeft+ " </b>");
}
}, 1000);




var playGame = false;








//array to hold image names
var container = ["0","0","0","0","1","1","2","2","3","3","3","4","5","5","6","6","6","7","7","7","8","8","8"]
//var container = ["0", "1", "2", "3", "4", "5", "6", "7", "8"]

//generate random number for name, as names are 0-8
function generateRandomForArray() {
    var num = Math.floor(Math.random() * 23 );
    return num;
}

//generate random position values for top
function generateRandom() {
    var num = Math.floor(Math.random() * (($(window).height()-250) - 150 + 1) + 150   );
    return num;
}

//generate random positions value for left
function generateRandomLeft() {
    var num = Math.floor(Math.random() *(( $( window ).width()-250) - 100 + 1) + 100   );
    return num;
}

//random number generator to set size of characters
function generateSize() {
    var num = Math.floor(Math.random() *(500 - 100 + 1) + 100   );
    return num;
}
//if statement needed here


//sets value of imgaes and gos through them changing image file and position
function setValue(){
  if (playGame ==true)
  {
  $(".img img:last-child").remove()
var num = container[generateRandomForArray()];
var size = generateSize();
img.append("<img class='size' style='width:"+size+"px' src ='img/"+ num+ ".png'>");
var left = generateRandomLeft();
var top = generateRandom();
img.last().css({"position":"absolute", "top": top + "px", "left":left + "px", "width":size+ "px","height":size+ "px"});
/*
setTimeout(function(){;
}, 1000);
*/
}

}












//clearInterval(interval);

//clicking on image gets score and removes picture of enemy
img.click(function(){
  playerScore++ ;
  score.html("<b>Score: "+ playerScore+ " </b>");
$(".img img:last-child").remove()
})


//click function for modal to restart game
restart.click(function(){
location.reload();//reload page
})

var interval = setInterval(function(){ setValue();} , 1000);






//play button
play.click(function(){
  if (playGame ==false)
  {
playGame = true;
}else{
  playGame = false;
}
if (timerPause ==false)
{
timerPause = true;
}else{
timerPause = false;
}
playerScore =0;
timeLeft = 30;
  //does my main function for popping image up in interval



//close modal
modal.style.display = "none";


});






//Modal


var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}




});
