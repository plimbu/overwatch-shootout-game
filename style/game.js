$(document).ready(function() {
  $('.img').on('dragstart', function(event) {
    event.preventDefault();
  });


  //only true when game is playing
  var playGame = false;
  var play = $(".play");
  var playerScore = 0;
  //set selectors
  var timer = $(".timer");
  var score = $(".score");
  var img = $(".img");
  var imgSize = $(".size");
  var restart = $(".restart");
  //TIMER
  var timeLeft = 0; //120 seconds timer for player
  setInterval(function countDown() {
    if (timeLeft != 0) {
      timeLeft--;
    }

    if (timeLeft == 0) { //remove image
      $(".img img:last-child").remove()

      playGame = false;
      playerScore = 0;
      modal.style.display = "block";
      clearInterval(interval);

    } else {
      timer.html("<b>Timer: " + timeLeft + " </b>");
    }
  }, 1000);


  $('body,html').css("background-image", "url(img/stage.png)");



  setInterval(function() {

    var name = stages[generateRandomForBG()];
    $('body,html').css("background-image", "url(img/" + name + ".png)");


  }, 9000)








  //array to hold image names
  var container = ["0", "0", "0", "0", "1", "1", "2", "2", "3", "3", "3", "4", "5", "5", "6", "6", "6", "7", "7", "7", "8", "8", "8"]
  var stages = ["stage1", "stage2", "stage3", "stage4", "stage5"];
  //generate random number for name, as names are 0-8
  function generateRandomForArray() {
    var num = Math.floor(Math.random() * 23);
    return num;
  }


  function generateRandomForBG() {
    var num = Math.floor(Math.random() * 5);
    return num;
    console.log(num);
  }
  //generate random position values for top
  function generateRandom() {
    var num = Math.floor(Math.random() * (($(window).height() - 250) - 150 + 1) + 150);
    return num;
  }

  //generate random positions value for left
  function generateRandomLeft() {
    var num = Math.floor(Math.random() * (($(window).width() - 250) - 100 + 1) + 100);
    return num;
  }

  //random number generator to set size of characters
  function generateSize() {
    var num = Math.floor(Math.random() * (500 - 100 + 1) + 100);
    return num;
  }
  //if statement needed here


  //sets value of imgaes and gos through them changing image file and position
  function setValue() {
    if (playGame == true) {
      voice.play();

      $(".img img:last-child").remove()
      var num = container[generateRandomForArray()];
      var size = generateSize();
      img.append("<img class='size' style='width:" + size + "px' src ='img/" + num + ".png'>");
      var left = generateRandomLeft();
      var top = generateRandom();
      img.last().css({
        "position": "absolute",
        "top": top + "px",
        "left": left + "px",
        "width": size + "px",
        "height": size + "px"
      });
      /*
      setTimeout(function(){;
      }, 1000);
      */
    }

  }

  var voice = document.getElementById("voice");

  var kill = document.getElementById("kill");








  //clearInterval(interval);

  //clicking on image gets score and removes picture of enemy
  img.click(function() {
    kill.play(); //plays kill sound
if (timeLeft ==0)
{
  playerScore =0;
}

    playerScore++;
    score.html("<b>Score: " + playerScore + " </b>");
    $(".img img:last-child").remove()
  })


  //click function for modal to restart game
  restart.click(function() {
    location.reload(); //reload page
  })







  //play button
  play.click(function() {
    playerScore = 0;


    var click = false;
    if (click === false) {
      click = true;
    } else {
      clearInterval(interval);

      click = false;
    }

    var audio = document.getElementById("audio");
    audio.play();


    if (playGame == false) {
      var interval = setInterval(function() {
        setValue();
      }, 1000);

      playGame = true;
    } else {
      playGame = false;
    }
    playerScore = 0;
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
