// document.querySelector(`.btn-roll`).addEventListener(`click`, function () {
//     let num1 = Math.floor(Math.random() * 6) + 1;
//     let num2 = Math.floor(Math.random() * 6) + 1;

//     document.getElementById(`dice-1`).src = `./img/dice-${num1}.png`;
//     document.getElementById(`dice-2`).src = `./img/dice-${num2}.png`;

//     document.getElementById(`dice-1`).style.display = `block`;
//     document.getElementById(`dice-2`).style.display = `block`;

//     if (num1 != 1 && num2 != 1) {
//       roundScore += num1 + num2;
//       document.getElementById(`current-${activePlayer}`).innerText = roundScore;
//     } else {
//       nextPlayer();
//     }
// })

let intervalId;
let num1, num2;
document.querySelector(`.btn-roll`).addEventListener(`mousedown`, function () {
  document.getElementById(`dice-1`).style.display = `block`;
  document.getElementById(`dice-2`).style.display = `block`;
  intervalId = setInterval(do_something, 20);
  document.querySelector(`.btn-roll`).addEventListener(`mouseleave`, function(){
      //this should help solve the problem that occurs when the mouse leaves the button while pressed down
      clearInterval(intervalId);
      if (num1 != 1 && num2 != 1) {
        roundScore += num1 + num2;
        num1 = 0;
        num2 = 0;
        document.getElementById(
          `current-${activePlayer}`
        ).innerText = roundScore;
      } else {
        clearInterval(intervalId);
        nextPlayer(); 
      }
    });
});
document.querySelector(`.btn-roll`).addEventListener(`mouseup`, function () {
  clearInterval(intervalId);
  if (num1 != 1 && num2 != 1) {
    roundScore += num1 + num2;
    num1 = 0;
    num2 = 0;
    document.getElementById(`current-${activePlayer}`).innerText = roundScore;
  } else {
    nextPlayer();
  }
});
// document.querySelector(`.btn-roll`).addEventListener(`mouseleave`, function () {
//   //this should help solve the problem that occurs when the mouse leaves the button while pressed down
//   clearInterval(intervalId);
// });

function do_something() {
  num1 = Math.floor(Math.random() * 6) + 1;
  num2 = Math.floor(Math.random() * 6) + 1;

  document.getElementById(`dice-1`).src = `./img/dice-${num1}.png`;
  document.getElementById(`dice-2`).src = `./img/dice-${num2}.png`;
}

function nextPlayer() {
  console.log(`Change player`);
  activePlayer == 0 ? (activePlayer = 1) : (activePlayer = 0);
  roundScore = 0;

  document.getElementById(`current-0`).innerText = 0;
  document.getElementById(`current-1`).innerText = 0;

  document.querySelector(`.player-0-panel`).classList.toggle(`active`);
  document.querySelector(`.player-1-panel`).classList.toggle(`active`);
}

document.querySelector(`.btn-hold`).addEventListener(`click`, function () {
  scores[activePlayer] += roundScore;

  document.getElementById(`score-${activePlayer}`).innerText =
    scores[activePlayer];

  if (scores[activePlayer] >= finalScore) {
    console.log(`Win`);
    document.getElementById(`name-${activePlayer}`).innerText = `Winner!`;

    document
      .getElementById(`player-${activePlayer}-panel`)
      .classList.remove(`active`);

    document
      .getElementById(`player-${activePlayer}-panel`)
      .classList.remove(`winner`);
  } else {
    nextPlayer();
  }
});

document.querySelector(`.btn-new`).addEventListener(`click`, function () {
  init();
});

let roundScore, activePlayer, scores, finalScore;

function init() {
  roundScore = 0;
  activePlayer = 0;
  scores = [0, 0];
  finalScore = 50;
  document.getElementById(`name-0`).innerText = `Player 1`;
  document.getElementById(`name-1`).innerText = `Player 2`;
  document.getElementById(`score-0`).innerText = `0`;
  document.getElementById(`score-1`).innerText = `0`;
  document.getElementById(`current-0`).innerText = `0`;
  document.getElementById(`current-1`).innerText = `0`;
  document.getElementById(`dice-1`).style.display = `none`;
  document.getElementById(`dice-2`).style.display = `none`;
}
window.onload = init();
