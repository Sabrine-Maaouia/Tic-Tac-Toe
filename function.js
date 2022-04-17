const cases = [...document.getElementsByClassName("case")]; 
let player = document.getElementById("player");
let score1 = document.getElementById("score1");
let score2 = document.getElementById("score2");
let scoreDraw = document.getElementById("scoreDraw");

let state = {
  playerCurrent: 1,
  scoreP1: 0,
  scoreP2: 0,
  matchDraw: 0,
  c1: 0,
  c2: 0,
  c3: 0,
  c4: 0,
  c5: 0,
  c6: 0,
  c7: 0,
  c8: 0,
  c9: 0,
};

const resetState = () => {
  playerCurrent = 1;
  state.c1 = 0;
  state.c2 = 0;
  state.c3 = 0;
  state.c4 = 0;
  state.c5 = 0;
  state.c6 = 0;
  state.c7 = 0;
  state.c8 = 0;
  state.c9 = 0;
};

const verifyVictory = () => {
  if (
    (state.c1 == state.c2 && state.c2 == state.c3 && state.c1 > 0) ||
    (state.c1 == state.c4 && state.c4 == state.c7 && state.c1 > 0) ||
    (state.c1 == state.c5 && state.c5 == state.c9 && state.c1 > 0) ||
    (state.c3 == state.c5 && state.c5 == state.c7 && state.c7 > 0) ||
    (state.c2 == state.c5 && state.c5 == state.c8 && state.c2 > 0) ||
    (state.c3 == state.c6 && state.c6 == state.c9 && state.c3 > 0) ||
    (state.c4 == state.c5 && state.c5 == state.c6 && state.c4 > 0) ||
    (state.c7 == state.c8 && state.c8 == state.c9 && state.c7 > 0)
  ) {
    console.log("winner !");
    return true;
  } else if (
    state.c1 !== 0 &&
    state.c2 !== 0 &&
    state.c3 !== 0 &&
    state.c4 !== 0 &&
    state.c5 !== 0 &&
    state.c6 !== 0 &&
    state.c7 !== 0 &&
    state.c8 !== 0 &&
    state.c9 !== 0
  ) {
    return null;
  } else {
    return false;
  }
};

const playerCase = (e) => {
  let idCase = e.target.id;

  
  if (state[idCase] !== 0) return;

  state[idCase] = state.playerCurrent;

  let isVictory = verifyVictory();

  if (isVictory === true) {
   

    alert("The winner is Player " + state.playerCurrent);

    if (state.playerCurrent == 1) {
      state.scoreP1++;
      score1.textContent = state.scoreP1;
    } else {
      state.scoreP2++;
      score2.textContent = state.scoreP2;
    }

    resetState();
    cases.forEach((c) => (c.textContent = ""));
  } else if (isVictory === null) {
   

    alert("It's a draw !");

    state.matchDraw++;
    scoreDraw.textContent = state.matchDraw;
    player.textContent = "1";

    resetState();
    cases.forEach((c) => (c.textContent = ""));
  } else if (isVictory === false) {

    if (state.playerCurrent == 1) {
      state.playerCurrent = 2;
      e.target.textContent = "X";
      player.textContent = "2";
    } else {
      state.playerCurrent = 1;
      e.target.textContent = "O";
      player.textContent = "1";
    }
  }
};

cases.forEach((el) => {
  el.addEventListener("click", playerCase);
});
