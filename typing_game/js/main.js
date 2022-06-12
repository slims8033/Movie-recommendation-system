
window.addEventListener('load', init)
let time=0;
let score=0;
let highscore=0;

const levels = {
    easy: 5,
    medium: 3,
    hard: 1
  };

const currentLevel=levels.medium;
// DOM Elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');
const highscoreDisplay = document.querySelector('#highscore');


const words = [
    'hat',
    'river',
    'lucky',
    'statue',
    'generate',
    'stubborn',
    'cocktail',
    'runaway',
    'joke',
    'developer',
    'establishment',
    'hero',
    'javascript',
    'nutrition',
    'revolver',
    'echo',
    'siblings',
    'investigate',
    'horrendous',
    'symptom',
    'laughter',
    'magic',
    'master',
    'space',
    'definition'
  ];

  function init(){
      // initialises the game 
      //console.log("init works")
      seconds.innerHTML=currentLevel;
      GenerateWord(words);
      wordInput.addEventListener('input',Matchwords);
      setInterval(countDown,1000);
      setInterval(gameStatus,50);
  }
  function Matchwords(){
      if(wordInput.value===currentWord.innerHTML){
          message.innerHTML="KEEP GOING!! ";
          gameover = false;
          time = currentLevel + 1;
          GenerateWord(words);
          wordInput.value = '';
          score++;
      }
       

        // If score is -1, display 0
        if (score === -1) {
            scoreDisplay.innerHTML = 0;
        } else {
            scoreDisplay.innerHTML = score;
        }
     
  }

  function GenerateWord(words){
      const randidx=Math.floor(Math.random()*words.length);
      //console.log(words[randidx]);
      currentWord.innerHTML=words[randidx];
  }
let gameover=false;
  function countDown(){
      if(time>0){
          time--;
      }
      else if(time==0){
          gameover=true;
      }
      timeDisplay.innerHTML=time;
  }

  function gameStatus(){
      if(gameover){
            message.innerHTML="GAME OVER"
            score=-1; 
      }
  }