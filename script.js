'use strict';

let diceResults = [1, 5, 3, 4, 6, 2];
let score = 0;

// player freezes -1- or -2- dice and checks score

const oneTwoDice = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      score += 100;
    } else if (arr[i] === 5) {
      score += 50;
    } else continue; // optimize!!
  }
  return score;
};

// console.log(oneTwoDice(diceResults));
// score = 0;

// player freezes -3- dice and checks score

const allEqual = (arr) => arr.every((val) => val === arr[0]);
// true/false

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

// console.log(threeDice(diceResults));
// score = 0;

// player freezes -4- dice and checks score

const fourDice = function (arr) {
  if (allEqual(arr)) {
    score = 1000;
  } else {
    const arr2 = arr.sort();
    console.log(arr2);

    for (let i = 0; i < arr.length; i++) {
      if (arr2[i + 1] > arr2[i]) {
        if (arr2[i] === 1) {
          score += 100;
        } else if (arr2[i] === 5) {
          score += 50;
        } else continue; // repeated
      } else if (arr2[i + 2] === arr2[i]) {
        if (arr2[i] === 1) {
          score += 300;
        } else score += arr2[i] * 100; // repeated

        if (arr2[i + 3] === 5) score += 50;
        break;
      } else {
        score = 0;
        oneTwoDice(arr2);
        break;
      }
    }
  }
  return score;
};

// console.log(fourDice(diceResults));
// score = 0;

// player freezes -5- dice and checks score

const fiveDice = function (arr) {
  if (allEqual(diceResults)) {
    score = 2000;
  } else {
    const arr2 = arr.sort();
    console.log(arr2);

    for (let i = 0; i < arr2.length; i++) {
      if (arr2[i + 1] > arr2[i]) {
        if (arr2[i] === 1) {
          score += 100;
        } else if (arr2[i] === 5) {
          score += 50;
        } else continue; // repeated code
      } else if (arr2[i + 2] === arr2[i] && arr2[i + 3] === arr2[i]) {
        score += 1000;
        if (arr2[i + 4] === 5) score += 50;
        break;
      } else if (arr2[i + 2] === arr2[i] && arr2[i + 3] !== arr2[i]) {
        if (arr2[i] === 1) {
          score += 300;
        } else score += arr2[i] * 100; // repeated

        if (arr2[i + 3] === 5) score += 50;
        if (arr2[i + 4] === 5) score += 50;
        break;
      } else {
        if (arr2[i] === arr2[i + 1]) {
          if (arr2[i] === 1) score += 100;
          if (arr2[i] === 5) score += 50;
          continue;
        } else {
          score = 0;
          oneTwoDice(arr2);
          break;
        }
      }
    }
  }
  return score;
};

// console.log(fiveDice(diceResults));
// score = 0;

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
  if (allEqual(diceResults)) {
    score = 3000; // all equal
  } else {
    const arr2 = arr.sort();
    console.log(arr2);

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
        // optimize!!
        if (arr2[i + 1] > arr2[i]) {
          if (arr2[i] === 1) {
            score += 100;
          } else if (arr2[i] === 5) {
            score += 50;
          } else continue; // repeated code
        } else if (arr2[i + 2] === arr2[i] && arr2[i + 3] === arr2[i]) {
          score += 1000;
          if (arr2[i + 4] === 5) score += 50;
          if (arr2[i + 5] === 5) score += 50; // new line
          break;
        } else if (arr2[i + 2] === arr2[i] && arr2[i + 3] !== arr2[i]) {
          if (arr2[i] === 1) {
            score += 300;
          } else score += arr2[i] * 100; // repeated

          if (arr2[i + 3] === 5) score += 50;
          if (arr2[i + 4] === 5) score += 50;
          if (arr2[i + 5] === 5) score += 50; // new line
          break;
        } else {
          if (arr2[i] === arr2[i + 1]) {
            if (arr2[i] === 1) score += 100;
            if (arr2[i] === 5) score += 50;
            continue;
          } else {
            score = 0;
            oneTwoDice(arr2);
            break;
          }
        }
      }
    }
  }
  return score;
};

console.log(sixDice(diceResults));
score = 0;
