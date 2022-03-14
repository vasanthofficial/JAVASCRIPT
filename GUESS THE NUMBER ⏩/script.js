/// GUESSING NUMBER

document.querySelector('.message');
let yourGuess;
let highScore = 0;
let score = document.querySelector('.score').textContent;
let secretNum = Math.floor(Math.random() * 20 + 1);

const showMsg = function (arg) {
  document.querySelector('.message').textContent = arg;
};
const guessNum = function (arg) {
  document.querySelector('.guess').value = arg;
};

//CHECK EVENT

document.querySelector('.check').addEventListener('click', function () {
  yourGuess = Number(document.querySelector('.guess').value);
  guessNum('');

  //NO NUMBER ENTERED && CORRECT NUMBER

  if (!yourGuess) {
    showMsg('PLEASE ENTER NUMBER');
  } else if (yourGuess === secretNum) {
    showMsg('YOU WON 🎉');
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNum;
    guessNum(secretNum);
    document.querySelector('.check').disabled = true;
    document.querySelector('.guess').disabled = true;
    ///HIGH SCORE
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = score;
    }
  } // RATING VALUE !
  else if (yourGuess !== secretNum) {
    showMsg(yourGuess > secretNum ? 'TOO HIGH 📈' : 'TOO LOW 📉');
    score = score - 1;
    document.querySelector('.score').textContent = score;
  } // OUT OF THE GAME !!
  if (score < 1) {
    score = 1;
    showMsg('GAME OVER 💔');
    document.querySelector('body').style.backgroundColor = 'red';
    document.querySelector('.check').disabled = true;
    document.querySelector('.guess').disabled = true;
    guessNum(yourGuess);
    // document.getElementById("myBtn").disabled = true;
  }
});

//PLAYING AGAIN 🤩🤩

document.querySelector('.again').addEventListener('click', function (e) {
  score = 5;
  secretNum = Math.floor(Math.random() * 20 + 1);
  document.querySelector('.score').textContent = score;
  showMsg('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '';
  document.querySelector('.number').style.width = '15rem';
  guessNum('');
  document.querySelector('.check').disabled = false;
  document.querySelector('.guess').disabled = false;
});
