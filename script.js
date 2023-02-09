//!  global variables

let result = 0; // storage for player score
let humanHands = ""; // storage for user botten cliks
let computerHands = ""; // storage for computer botten selection

//! main function (DOM Manipulation With logic)

function whenButtonClicked(humanSelected, computerSelected) {
  if (humanSelected == "Rock" && computerSelected == "Scissors") {
    result++;
    document.querySelector(
      "#player-score"
    ).innerHTML = `your score  = ${result}`;
    document.querySelector(
      "#hands"
    ).innerHTML = ` 🙍🏻‍♂️ ${humanHands} vs 🤖 ${computerHands} `;
    document.querySelector("#result").innerHTML = `🙍🏻‍♂️ Won `;

    // return `Human won Result:- ${result}`
  } else if (humanSelected == "Paper" && computerSelected == "Rock") {
    result++;
    document.querySelector(
      "#player-score"
    ).innerHTML = `your score  = ${result}`;
    document.querySelector(
      "#hands"
    ).innerHTML = ` 🙍🏻‍♂️ ${humanHands} vs 🤖 ${computerHands} `;
    document.querySelector("#result").innerHTML = `🙍🏻‍♂️ Won `;
  } else if (humanSelected == "Scissors" && computerSelected == "Paper") {
    result++;
    document.querySelector(
      "#player-score"
    ).innerHTML = `your score  = ${result}`;
    document.querySelector(
      "#hands"
    ).innerHTML = ` 🙍🏻‍♂️ ${humanHands} vs 🤖 ${computerHands} `;
    document.querySelector("#result").innerHTML = `🙍🏻‍♂️ Won `;
  } else if (humanSelected == computerSelected) {
    result = result;
    document.querySelector(
      "#player-score"
    ).innerHTML = `your score  = ${result}`;
    document.querySelector(
      "#hands"
    ).innerHTML = ` 🙍🏻‍♂️ ${humanHands} vs 🤖 ${computerHands} `;
    document.querySelector("#result").innerHTML = `🙍🏻‍♂️ draw 🤖 `;
  } else {
    result--;
    document.querySelector(
      "#player-score"
    ).innerHTML = `your score  = ${result}`;
    document.querySelector(
      "#hands"
    ).innerHTML = ` 🙍🏻‍♂️ ${humanHands} vs 🤖 ${computerHands} `;
    document.querySelector("#result").innerHTML = `🤖 Won `;
  }
}

//! computer random selection's

function computer() {
  const choice = ["Rock", "Paper", "Scissors"];
  let randomNumber = Math.floor(Math.random() * 3);
  let arrar = document.querySelectorAll(".rpsButton");
  computerHands = arrar[randomNumber].innerHTML;
  return choice[randomNumber];
}

//!  user unput

function humanSelection() {
  const buttons = document.querySelectorAll(".rpsButton");
  buttons.forEach((button) => {
    button.onclick = () => {
      let humanSelected = button.value;
      humanHands = button.textContent;
      console.log(`seleceted by human = ${humanSelected}`);
      let computerSelected = computer(); //? calling the computer random selection
      console.log(`seleceted by Computer  = ${computerSelected}`);
      whenButtonClicked(humanSelected, computerSelected);
    };
  });
}

//! end game

// ** endGame function clears all the text on the DOM **
//? reload the page

const refersh = document.querySelector("#endGameButton");
refersh.onclick = () => {
  window.location.reload();
};

//TODO starting the main function

function play() {
  humanSelection();
}

play();
