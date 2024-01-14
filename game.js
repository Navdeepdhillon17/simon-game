userClickedPattern = [];

gamePattern = [];


buttonColors = [ 
    "red",
    "blue",
    "green",
    "yellow"
]

var started = false;

var level = 0;

$(document).keypress(function (event){ 
    if (!started){
        $("#level-title").text("Level " + level)
        console.log(event.key)
        nextSequence();
        started = true;
    }
    });
$(".btn").click(function() {
        var userChosenColour = $(this).attr("id")
        userClickedPattern.push(userChosenColour);
        playSound(userChosenColour);
        animatePress(userChosenColour);
        checkAnswer(userClickedPattern.length-1);
        // level++;
        // $("#level-title").text("Level " + level)
    })
 
function checkAnswer(currentLevel){
        if (gamePattern[currentLevel]===userClickedPattern[currentLevel]){
         console.log("success");
        
        if (userClickedPattern.length===gamePattern.length){

           setTimeout(function() {
             nextSequence();
           }, 1000);
        }
    }
        else {
            
            playSound("wrong");
            $("h1").text("Game Over, Press Any Key to Restart")
            $("body").addClass("game-over")
            setTimeout (function(){
                $("body").removeClass("game-over")
            }, 200)
            console.log("failed");
            startOver();
        }
      }   


function startOver(){
   level=0;
   gamePattern = [];
   started = false;

}
function nextSequence(){
    userClickedPattern = [];
    level++;
    $("#level-title").text("Level " + level);
    var randomNumber = Math.floor(Math.random()*4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    $("#"+ randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);

}




function playSound(name){
    var audio = new Audio( "sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColour){

    $("#"+ currentColour).addClass("pressed");
    
    setTimeout(function() {
        $("#"+ currentColour).removeClass("pressed");
      }, 100);
 }


  
   


