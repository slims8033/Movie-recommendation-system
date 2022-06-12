
let gamepattern="";
let userpattern="";
let started=false;
// 1st thing that happens when game starts 
$(document).keydown(function(){

        if(!started){
            $("h1").text("Level "+(levelnum));
            nextseq();
            started=true;
        }
});
colors=["red","green","blue","yellow"];
let levelnum=0;
// sequence added to the gamepattern at any given time 
function nextseq(){
    userpattern="";
    $("h1").text("Level "+(levelnum++));
    var x=Math.floor(Math.random()*4);
    var randomchosencolor=colors[x];
    gamepattern+=randomchosencolor;

    $("#"+randomchosencolor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playsound(randomchosencolor);
}
function playsound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
    
}


    $(".btn").click(function(){
    var idClicked = $(this).attr("id");
    userpattern+=idClicked;
    playsound(idClicked);

    animatePress(idClicked);
    checkans(userpattern.length-1);
});



function animatePress(currentcolor){
    $("#"+currentcolor).addClass("pressed");
    setTimeout(function() {
        $("#"+currentcolor).removeClass("pressed");
    }, 100);

}

function checkans(latest){
    if(userpattern[latest]===gamepattern[latest]) {
        console.log("right");
       // gamepattern="";
         //userpattern="";
         if(userpattern.length===gamepattern.length)
            setTimeout(nextseq, 1000);

    }
    else {
        //console.log("wrong");
        gameover();
        $(document).keydown(restartgame);
    }
}

function gameover(){
    var audio = new Audio("sounds/wrong.mp3");
    audio.play();
    $("h1").text("Game Over Bishes!, Press Any Key to Restart ");
    $("body").addClass("game-over");
    setTimeout(function() {
        $("body").removeClass("game-over");
    }, 300);
        
}

function restartgame(){
    levelnum=0;
    started=false;
    gamepattern="";
    nextseq();
}


