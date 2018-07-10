$(document).ready(function(){
  $('.img').on('dragstart', function(event) { event.preventDefault(); });

  var playerScore = 0;
  //set selectors
  var timer = $(".timer");
  var score = $(".score");
  var img = $(".img");


//TIMER
var timeLeft = 120; //120 seconds timer for player
setInterval( function countDown(){
timeLeft --;
if(timeLeft==0)
{
  alert("TIME IS UP BISH");

console.log(timeLeft);
}
else {
  timer.html("<b>Timer: "+ timeLeft+ " </b>");

}


}, 1000);










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
    var num = Math.floor(Math.random() * (($(window).height()-250) - 100 + 1) + 100   );
    return num;
}

//generate random positions value for left
function generateRandomLeft() {
    var num = Math.floor(Math.random() *(( $( window ).width()-250) - 100 + 1) + 100   );
    return num;
}



function setValue(){
console.log(  $( window ).width());
var num = container[generateRandomForArray()];

$(".img").append("<img src ='img/"+ num+ ".png'>");
var left = generateRandomLeft();
var top = generateRandom();
img.last().css({"position":"absolute", "top": top + "px", "left":left + "px"});
setTimeout(function(){$(".img img:last-child").remove();
}, 1000);

}









setInterval(function(){ setValue(); }, 1500);



img.click(function(){

  playerScore++ ;

  score.html("<b>Score: "+ playerScore+ " </b>");

})




//Modal


// Get the modal
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
