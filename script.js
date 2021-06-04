'use strict';

//-----------------------------------------------------------------------
//           CHECK SCORE functions
//_______________________________________________________________________

let score;

// player freezes -1- or -2- dice and checks score

const oneTwoDice = function (arr) {
  score = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      score += 100;
    } else if (arr[i] === 5) {
      score += 50;
    } else continue;
  }
  return score;
};

// player freezes -3- dice and checks score

const allEqual = (arr) => arr.every((val) => val === arr[0]);

const threeDice = function (arr) {
  if (allEqual(arr)) {
    if (arr[0] === 1) {
      score = 300;
    } else score = arr[0] * 100;
  } else {
    oneTwoDice(arr);
  }
  return score;
};

// player freezes -4- dice and checks score

const fourDice = function (arr) {
  if (allEqual(arr)) {
    score = 1000;
  } else {
    const arr2 = arr.sort();

    for (let i = 0; i < arr.length; i++) {
      if (arr2[i + 1] > arr2[i]) {
        if (arr2[i] === 1) {
          score += 100;
        } else if (arr2[i] === 5) {
          score += 50;
        } else continue;
      } else if (arr2[i + 2] === arr2[i]) {
        if (arr2[i] === 1) {
          score += 300;
        } else score += arr2[i] * 100;

        if (arr2[i + 3] === 5) score += 50;
        break;
      } else {
        oneTwoDice(arr2);
        break;
      }
    }
  }
  return score;
};

// player freezes -5- dice and checks score

const fiveDice = function (arr) {
  if (allEqual(arr)) {
    score = 2000;
  } else {
    const arr2 = arr.sort();

    for (let i = 0; i < arr2.length; i++) {
      if (arr2[i + 1] > arr2[i]) {
        if (arr2[i] === 1) {
          score += 100;
        } else if (arr2[i] === 5) {
          score += 50;
        } else continue;
      } else if (arr2[i + 2] === arr2[i] && arr2[i + 3] === arr2[i]) {
        score += 1000;
        if (arr2[i + 4] === 5) score += 50;
        break;
      } else if (arr2[i + 2] === arr2[i] && arr2[i + 3] !== arr2[i]) {
        if (arr2[i] === 1) {
          score += 300;
        } else score += arr2[i] * 100;

        if (arr2[i + 3] === 5) score += 50;
        if (arr2[i + 4] === 5) score += 50;
        break;
      } else {
        if (arr2[i] === arr2[i + 1]) {
          if (arr2[i] === 1) score += 100;
          if (arr2[i] === 5) score += 50;
          continue;
        } else {
          oneTwoDice(arr2);
          break;
        }
      }
    }
  }
  return score;
};

// player freezes -6- dice and checks score

let arr_3a,
  arr_3b,
  arr_4a,
  arr_4b,
  arr_4b1,
  arr_4b2,
  arr_2a,
  arr_2b,
  arr_2c,
  arr_5a,
  arr_5b;

const sixDice = function (arr) {
  if (allEqual(arr)) {
    score = 3000;
  } else {
    const arr2 = arr.sort();

    // array split in smaller arrays
    arr_3a = arr2.slice(0, 3);
    arr_3b = arr2.slice(3, 6);
    arr_4a = arr2.slice(0, 2);
    arr_4b = arr2.slice(2, 6);
    arr_4b1 = arr2.slice(0, 4);
    arr_4b2 = arr2.slice(4, 6);
    arr_2a = arr2.slice(0, 2);
    arr_2b = arr2.slice(2, 4);
    arr_2c = arr2.slice(4, 6);
    arr_5a = arr2.slice(0, 5);
    arr_5b = arr2.slice(1, 6);

    if (allEqual(arr_3a) && allEqual(arr_3b)) {
      // two triplets
      score = 2500;
      console.log(arr_3a, arr_3b);
    } else if (allEqual(arr_5a)) {
      // five the same (+5?)
      score = 2000;
      console.log(arr_5a);
      if (arr2[5] === 5) {
        score += 50;
      }
    } else if (allEqual(arr_5b)) {
      // (1? +) five the same
      score = 2000;
      console.log(arr_5b);
      if (arr2[0] === 1) {
        score += 100;
      }
    } else if (allEqual(arr_4a) && allEqual(arr_4b)) {
      // pair + four the same
      score = 1500;
      console.log(arr_4a, arr_4b);
    } else if (allEqual(arr_4b1) && allEqual(arr_4b2)) {
      // four the same + pair
      score = 1500;
      console.log(arr_4b1, arr_4b2);
    } else if (allEqual(arr_2a) && allEqual(arr_2b) && allEqual(arr_2c)) {
      // 3 pairs
      score = 1500;
      console.log(arr_2a, arr_2b, arr_2c);
    } else if (arr2.toString() === '1,2,3,4,5,6') {
      // 1-6 straight
      score = 1500;
    } else {
      for (let i = 0; i < arr2.length; i++) {
        if (arr2[i + 1] > arr2[i]) {
          if (arr2[i] === 1) {
            score += 100;
          } else if (arr2[i] === 5) {
            score += 50;
          } else continue;
        } else if (arr2[i + 2] === arr2[i] && arr2[i + 3] === arr2[i]) {
          score += 1000;
          if (arr2[i + 4] === 5) score += 50;
          if (arr2[i + 5] === 5) score += 50;
          break;
        } else if (arr2[i + 2] === arr2[i] && arr2[i + 3] !== arr2[i]) {
          if (arr2[i] === 1) {
            score += 300;
          } else score += arr2[i] * 100;

          if (arr2[i + 3] === 5) score += 50;
          if (arr2[i + 4] === 5) score += 50;
          if (arr2[i + 5] === 5) score += 50;
          break;
        } else {
          if (arr2[i] === arr2[i + 1]) {
            if (arr2[i] === 1) score += 100;
            if (arr2[i] === 5) score += 50;
            continue;
          } else {
            oneTwoDice(arr2);
            break;
          }
        }
      }
    }
  }
  return score;
};

//-----------------------------------------------------------------------
//           GAME LOGIC
//_______________________________________________________________________

// variables

let newScore, activePlayer;
let diceResults = [];
let newDiceResults = [];
let notUsedDice = [];
let totalScores = [];

const message = document.querySelector('.message');
const diceImages = document.querySelectorAll('.img');

const player1 = document.querySelector('#player--0');
const player2 = document.querySelector('#player--1');

const scoreTable = document.querySelector('#score');

const checkBtn = document.getElementById('check');
const addBtn = document.getElementById('add');
const keepBtn = document.getElementById('keep');
const rollBtn = document.getElementById('roll');
const playAgainBtn = document.getElementById('play-again');

const modal = document.querySelector('.section__modal');
const overlay = document.querySelector('#overlay');

const stripe1L = document.querySelector('#stripe--0L');
const stripe1R = document.querySelector('#stripe--0R');
const stripe2L = document.querySelector('#stripe--1L');
const stripe2R = document.querySelector('#stripe--1R');

// start conditions

function player1active() {
  activePlayer = 0;
  player1.classList.add('player--active');
  player2.classList.remove('player--active');

  stripe1L.classList.add('stripe--active');
  stripe1R.classList.add('stripe--active');
  stripe2L.classList.remove('stripe--active');
  stripe2R.classList.remove('stripe--active');
}
player1active();

function init() {
  message.textContent = `PLAYER ${activePlayer + 1}  ROLLS THE DICE`;
  message.classList.remove('message--alert');
  message.classList.add('message--new');
  overlay.classList.remove('section--overlay');
  modal.classList.add('hidden');

  score = 0;
  newScore = 0;
  scoreTable.textContent = '0';

  for (let i = 0; i < diceImages.length; i++) {
    diceImages[i].classList.add('dice--blocked--init');
    diceImages[i].classList.remove(
      'dice--chosen',
      'avoid-clicks',
      'dice--blocked'
    );
  }
  scoreTable.classList.add('avoid-clicks');
  rollBtn.classList.add('active-btn');
  rollBtn.classList.remove('avoid-clicks');
  checkBtn.classList.add('non-active-btn', 'avoid-clicks');
  keepBtn.classList.add('avoid-clicks');
  addBtn.classList.add('avoid-clicks');
  playAgainBtn.classList.remove('active-btn');
}
init();

function initTotal() {
  totalScores = [0, 0];
  document.querySelector('#current--0').textContent = 0;
  document.querySelector('#current--1').textContent = 0;
}
initTotal();

// generating new numbers

function generateNumbers() {
  for (let i = 0; i < diceImages.length; i++) {
    if (!diceImages[i].classList.contains('dice--blocked')) {
      diceResults[i] = Math.trunc(Math.random() * 6) + 1;
      document.getElementById(
        `dice-${i + 1}`
      ).src = `img/dice-${diceResults[i]}.jpg`;
      // console.log(diceResults[i]);
    } else continue;
  }
  console.log('dice results:', diceResults);
}

// rolling the dice

rollBtn.addEventListener('click', function () {
  console.log('ROLL btn clicked.');

  // unlocking initial block and allowing clicks on current dice
  for (let i = 0; i < diceImages.length; i++) {
    diceImages[i].classList.remove('dice--blocked--init', 'avoid-clicks');
  }

  generateNumbers();

  rollBtn.classList.remove('active-btn');
  rollBtn.classList.add('non-active-btn', 'avoid-clicks');
  message.textContent = 'Choose dice by clicking on it';
});

// choosing dice by clicking on it (+ unclicking)

for (let i = 0; i < diceImages.length; i++) {
  diceImages[i].addEventListener('click', function () {
    diceImages[i].classList.toggle('dice--chosen');

    checkBtn.style.backgroundColor = '#18a095';
    checkBtn.classList.remove('avoid-clicks');

    message.classList.add('message--new');
  });
}

// async player change / initialization
function wait3sec() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(playerChange(), init());
    }, 3000);
  });
}

// checking score

const checkScore = function () {
  checkBtn.style.backgroundColor = '';
  checkBtn.classList.add('avoid-clicks');

  for (let i = 0; i < diceImages.length; i++) {
    diceImages[i].classList.add('avoid-clicks');
  }

  newDiceResults = [];
  notUsedDice = [];
  score = 0;

  for (let i = 0; i < diceImages.length; i++) {
    if (
      diceImages[i].classList.contains('dice--chosen') &&
      !diceImages[i].classList.contains('dice--blocked')
    ) {
      newDiceResults.push(diceResults[i]);
    } else {
      notUsedDice.push(diceResults[i]);
    }
  }

  console.log('new dice results: ', newDiceResults);
  console.log('not used dice: ', notUsedDice);

  // counting score - function type depending on a number of chosen dice

  let areNotChosen = false;

  console.log('score:');

  if (newDiceResults.length === 1 || newDiceResults.length === 2) {
    newScore += oneTwoDice(newDiceResults);
    console.log(newScore);
  } else if (newDiceResults.length === 3) {
    newScore += threeDice(newDiceResults);
    console.log(newScore);
  } else if (newDiceResults.length === 4) {
    newScore += fourDice(newDiceResults);
    console.log(newScore);
  } else if (newDiceResults.length === 5) {
    newScore += fiveDice(newDiceResults);
    console.log(newScore);
  } else if (newDiceResults.length === 6) {
    newScore += sixDice(newDiceResults);
    console.log(newScore);
  } else {
    areNotChosen = true;
  }

  console.log('current score: ', score);

  if (score === 0 && !areNotChosen) {
    if (newScore === 0) {
      message.textContent = 'FARKLE! NO POINTS THIS TIME...';
    } else {
      message.textContent = 'YOU LOOSE ALL CURRENT POINTS';
    }
    newScore = 0;
    scoreTable.textContent = 0;
    message.classList.add('message--alert');

    async function asyncCall() {
      const result = await wait3sec();
    }
    asyncCall();
  } else if (areNotChosen) {
    message.textContent = 'No dice was chosen';
    message.classList.remove('message--new');
    for (let i = 0; i < diceImages.length; i++) {
      diceImages[i].classList.remove('avoid-clicks');
    }
  } else {
    scoreTable.textContent = newScore;
    keepBtn.classList.add('active-btn');
    addBtn.classList.add('active-btn');
    keepBtn.classList.remove('avoid-clicks');
    addBtn.classList.remove('avoid-clicks');
    message.classList.remove('message--new');
    message.textContent = 'ADD or CONTINUE ?';
  }
};

checkBtn.addEventListener('click', checkScore);

// keep rolling button

function keepRolling() {
  // blocking used dice
  for (let i = 0; i < diceImages.length; i++) {
    if (diceImages[i].classList.contains('dice--chosen'))
      diceImages[i].classList.add('dice--blocked');
  }

  // if all dice are 'dice-blocked' (all scored), class is removed and player continues
  let blockedDice = [];
  for (let i = 0; i < diceImages.length; i++) {
    if (diceImages[i].classList.contains('dice--blocked')) {
      blockedDice.push(diceResults[i]);
    } else continue;
  }
  console.log('blocked dice: ', blockedDice);
  for (let i = 0; i < diceImages.length; i++) {
    if (blockedDice.length === 6) {
      diceImages[i].classList.remove('dice--blocked', 'dice--chosen');
      diceImages[i].classList.add('avoid-clicks');
    }
  }

  keepBtn.classList.remove('active-btn');
  addBtn.classList.remove('active-btn');
  keepBtn.classList.add('avoid-clicks');
  addBtn.classList.add('avoid-clicks');

  rollBtn.classList.add('active-btn');
  rollBtn.classList.remove('avoid-clicks');

  message.textContent = 'ROLL THE DICE';
  message.classList.add('message--new');
}
keepBtn.addEventListener('click', keepRolling);

// change of player

function playerChange() {
  activePlayer = activePlayer === 1 ? 0 : 1;
  player1.classList.toggle('player--active');
  player2.classList.toggle('player--active');

  stripe1L.classList.toggle('stripe--active');
  stripe1R.classList.toggle('stripe--active');
  stripe2L.classList.toggle('stripe--active');
  stripe2R.classList.toggle('stripe--active');

  console.log('CHANGE OF PLAYER');
}

// adding current score to total score

function addScore() {
  totalScores[`${activePlayer}`] += newScore;
  console.log('total scores: ', totalScores);
  document.querySelector(`#current--${activePlayer}`).textContent =
    totalScores[`${activePlayer}`];

  // !! for the purpose of testing, set winning amount of points to 1K instead of 10K
  if (totalScores[`${activePlayer}`] >= 10000) {
    playerWins();
  } else {
    async function asyncCall() {
      const result = await wait3sec();
    }
    asyncCall();
    message.textContent = `GREAT!`;
  }

  keepBtn.classList.remove('active-btn');
  addBtn.classList.remove('active-btn');
  keepBtn.classList.add('avoid-clicks');
  addBtn.classList.add('avoid-clicks');
}
addBtn.addEventListener('click', addScore);

// play again button

playAgainBtn.addEventListener('click', function () {
  player1active();
  initTotal();
  init();
});

// winning modal window

function playerWins() {
  console.log(`Player ${activePlayer + 1} wins!`);

  overlay.classList.add('section--overlay');
  modal.classList.remove('hidden');
  modal.textContent = ` YAY ! PLAYER nr ${activePlayer + 1} WINS 🎲`;

  playAgainBtn.classList.add('active-btn');
  message.textContent = `PLAYER -${activePlayer + 1}-  WINS`;
  message.classList.add('message--alert');
  keepBtn.classList.add('avoid-clicks');
  addBtn.classList.add('avoid-clicks');
}

//-----------------------------------------------------------------------
//           NAVIGATION - side bar buttons
//_______________________________________________________________________

const btnOverlay = document.querySelector('.helpBtn__overlay');
const scoringImg = document.querySelector('#img');
const videoModal = document.querySelector('#video');

// display of scoring combinations
document.querySelector('#secondBtn').addEventListener('click', function () {
  btnOverlay.classList.remove('hidden');
  scoringImg.classList.remove('hidden');
});

// closing modal window
const closeModal = function () {
  btnOverlay.classList.add('hidden');
  scoringImg.classList.add('hidden');
  videoModal.classList.add('hidden');
};

btnOverlay.addEventListener('click', closeModal);

// escape key
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && !btnOverlay.classList.contains('hidden')) {
    closeModal();
  }
});

// video tutorial display
document.getElementById('thirdBtn').addEventListener('click', function () {
  videoModal.classList.remove('hidden');
  btnOverlay.classList.remove('hidden');
});
