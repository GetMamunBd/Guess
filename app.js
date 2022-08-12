"use-strict";
let score = 10;
let initialHighScore = 0;

// Random Number******
let secretNumber = Math.trunc(Math.random() * 10 + 1);

// Message Display ********
const message = function (message) {
  document.querySelector(".message").textContent = message;
};

// High Score Display ********
const highScore = function (hiscore) {
  document.querySelector(".highscore").textContent = hiscore;
};

// check btn disable ********
const checkBtn = function (dis) {
  document.querySelector(".check").disabled = dis;
};

// Input disable ********
const inputdis = function (dis) {
  document.querySelector(".input_number").disabled = dis;
};

// Score Display ********
const scorePrint = function (scorehtml) {
  document.querySelector(".score").textContent = scorehtml;
};

// Big Number Display ********
const bigNumber = function (bignumber) {
  document.querySelector(".hidden_number").textContent = bignumber;
};

// Check Button Press **********
document.querySelector(".check").addEventListener("click", function () {
  const inputNumber = Number(document.querySelector(".input_number").value);

  if (!inputNumber) {
    message("⚠️ Please enter a number");
    document.querySelector(".message").style.color = "#FF5B76";
  } else if (inputNumber !== secretNumber) {
    score = score - 1;
    scorePrint(score);
    inputNumber > secretNumber ? message("📈 Too High") : message("📉 Too Low");
    if (score < 1) {
      message("🚫 You lost the game");
      scorePrint(0);
      checkBtn(true);
      inputdis(true);
      document.querySelector("body").style.background = "rgb(130, 35, 35)";
    }
  } else if (inputNumber === secretNumber) {
    message("✅ Your answere is correct");
    document.querySelector(".message").style.color = "#00D26A";
    bigNumber(secretNumber);
    checkBtn(true);
    inputdis(true);
    document.querySelector("body").style.background = "#0f5900";
    document.querySelector(".check").style.background = "rgb(12, 151, 82)";
    document.querySelector(".line").style.background = "rgb(12, 151, 82)";
    document.querySelector(".input_number").style.background = "#0b4000";
    document.querySelector(".hidden_number").style.background =
      "rgb(12, 151, 82)";
    document.querySelector(".input_number").style.border = "0";
    document.querySelector(".check").textContent = "Congratulation!";

    if (score > initialHighScore) {
      initialHighScore = score;
      highScore(score);
    }
  }
});

// Reset Btn ************
document.querySelector(".again").addEventListener("click", function () {
  document.querySelector("body").style.background = "#0f0f0f";
  score = 10;
  document.querySelector(
    ".message"
  ).innerHTML = `<i class="fa-solid fa-brain"></i> Start Guessing Now...`;
  checkBtn(false);
  inputdis(false);
  bigNumber("?");
  secretNumber = Math.trunc(Math.random() * 10 + 1);
  document.querySelector(".message").style.color = "#fff";

  document.querySelector(".check").style.background =
    "linear-gradient(#f75973, #dc2342)";
  document.querySelector(".hidden_number").style.background =
    "linear-gradient(#f75973, #dc2342)";
  document.querySelector(".input_number").style.background = "#2e1b1b";
  document.querySelector(".line").style.background = "#2e1b1b";
  document.querySelector(".check").textContent = "Check!";
  //   console.log(secretNumber);
});
// console.log(secretNumber);
