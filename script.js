"use strict";

let winner;
let rock = 1;
let paper = 2;
let scissors = 3;
let computerChoice;
let userChoice;

window.addEventListener("DOMContentLoaded", start);

function start() {
  console.log("Start");
  document.querySelector("#win").classList.add("hidden");
  document.querySelector("#lose").classList.add("hidden");
  document.querySelector("#draw").classList.add("hidden");
  computerChoice = 0;
  userChoice = 0;

  document.querySelector("#player1").classList.remove("rock");
  document.querySelector("#player1").classList.remove("paper");
  document.querySelector("#player1").classList.remove("scissors");
  document.querySelector("#player2").classList.remove("rock");
  document.querySelector("#player2").classList.remove("paper");
  document.querySelector("#player2").classList.remove("scissors");

  document.querySelector(".rock").addEventListener("click", getPlayerChoice);
  document.querySelector(".paper").addEventListener("click", getPlayerChoice);
  document
    .querySelector(".scissors")
    .addEventListener("click", getPlayerChoice);
}

function getPlayerChoice() {
  console.log("getPlayerChoice");
  if (this.classList.contains("rock")) {
    userChoice = 1;
  } else if (this.classList.contains("paper")) {
    userChoice = 2;
  } else {
    userChoice = 3;
  }
  console.log(userChoice);
  makeRandomComputerChoice();
}

function makeRandomComputerChoice() {
  console.log("makeRandomComputerChoice");
  computerChoice = Math.floor(Math.random() * 3) + 1;
  console.log(computerChoice);
  showAnimations();
}

function showAnimations() {
  console.log("showAnimations");
  document.querySelector("#player1").classList.add("shake");
  document.querySelector("#player2").classList.add("shake");
  document
    .querySelector("#player1")
    .addEventListener("animationend", showHands);
  document
    .querySelector("#player2")
    .addEventListener("animationend", showHands);
}

function showHands() {
  console.log("showHands");
  document.querySelector("#player1").classList.remove("shake");
  document.querySelector("#player2").classList.remove("shake");
  if (userChoice === 1) {
    document.querySelector("#player1").classList.add("rock");
  } else if (userChoice === 2) {
    document.querySelector("#player1").classList.add("paper");
  } else {
    document.querySelector("#player1").classList.add("scissors");
  }
  if (computerChoice === 1) {
    document.querySelector("#player2").classList.add("rock");
  } else if (computerChoice === 2) {
    document.querySelector("#player2").classList.add("paper");
  } else {
    document.querySelector("#player2").classList.add("scissors");
  }

  determineWinner();
}

function determineWinner() {
  console.log("determineWinner");

  if (userChoice === 1) {
    if (computerChoice === 3) {
      showWin();
    } else if (computerChoice === 1) {
      showDraw();
    } else {
      showLose();
    }
  } else if (userChoice === 2) {
    if (computerChoice === 1) {
      showWin();
    } else if (computerChoice === 2) {
      showDraw();
    } else {
      showLose();
    }
  } else {
    if (computerChoice === 2) {
      showWin();
    } else if (computerChoice === 3) {
      showDraw();
    } else {
      showLose();
    }
  }
}

function showWin() {
  console.log("showWin");
  document.querySelector("#win").classList.remove("hidden");
  setTimeout(start, 3000);
}

function showLose() {
  console.log("showLose");
  document.querySelector("#lose").classList.remove("hidden");
  setTimeout(start, 3000);
}

function showDraw() {
  console.log("showDraw");
  document.querySelector("#draw").classList.remove("hidden");
  setTimeout(start, 3000);
}
