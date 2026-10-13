let RandomNumber = Math.floor(Math.random() *100)+1;
let attempts = 0;
let bestScore = localStorage.getItem("bestScore");

if(bestScore) {
     document.getElementById('bestScore')
     .textContent = bestScore;
}

const guessIiput = document.getElementById('guess-input');
const message = document.getElementById('message');
const attempt = document.getElementById('attempts');

document.getElementById('guess-btn').addEventListener('click' , () => {
     const guess = Number(guessIiput.value);
     if (!guess || guess < 1 || guess > 100) {
          message.textContent = "Enter a Number between 1 - 100" ;

          message.style.color = "#facc16";

          return;
     }

     attempts++ ;
     attempt.textContent = attempts;

     if(guess === RandomNumber) {
          message.textContent = ` CORRECT! Number was ${RandomNumber} ` ;
          
          message.style.color = '#ddb0b0' ;

          if(!bestScore || attempts < bestScore) {
               localStorage.setItem('bestScore' , attempts);

               document.getElementById('bestScore').textContent = attempts;
          }
  
     }

     else if(guess < RandomNumber) {
          message.textContent = 'Go higher 👆' ;
          message.style.color = '#000';
     }

          else if(guess > RandomNumber) {
          message.textContent = 'Go lower 👇' ;
          message.style.color = '#000';
     }

     guessIiput.value = "" ;
});

document.getElementById('restart').addEventListener('click', () => {

     RandomNumber = Math.floor(Math.random() *100)+1 ;

     attempts = 0;
     attempt.textContent = 0;

     message.textContent = 'Start Guessing ...' ;

     message.style.color = '#fff' ;

     guessIiput.value = '' ;
});
