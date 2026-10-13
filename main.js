let RandomNumber = Math.floor(Math.random() *100)+1;
let attemps = 0;
let bestScore = localStorage.getItem("bestScore");

if(bestScore) {
     document.getElementById('bestScore')
     .textContent = bestScore;
}

const guessIiput = document.getElementById('guess-input');
const message = document.getElementById('message');
const attemp = document.getElementById('attemps');

document.getElementById('guess-btn').addEventListener('click' , () => {
     const guess = Number(guessIiput.value);
     if (!guess || guess < 1 || guess > 100) {
          message.textContent = "Enter a Number between 1 - 100" ;

          message.style.color = "#facc16";

          return;
     }

     attemps++ ;
     attemp.textContent = attemps;

     if(guess === RandomNumber) {
          message.textContent = ` CORRECT! WINNER. Number was ${RandomNumber} ` ;
          
          message.style.color = '#ddb0b0' ;

          if(!bestScore || attemps < bestScore) {
               localStorage.setItem('bestScore' , attemps);

               document.getElementById('bestScore').textContent = attemps;
          }
  
     }

     else if(guess > RandomNumber) {
          message.textContent = 'Too High' ;
          message.style.color = '#928989' ;
     }

          else if(guess < RandomNumber) {
          message.textContent = 'Too Low' ;
          message.style.color = '#928989' ;
     }

     guessIiput.value = "" ;
});

document.getElementById('restart').addEventListener('click', () => {

     RandomNumber = Math.floor(Math.random() *100)+1 ;

     attemps = 0;
     attemp.textContent = 0;

     message.textContent = 'Start Guessing ...' ;

     message.style.color = '#fff' ;

     guessIiput.value = '' ;
});
