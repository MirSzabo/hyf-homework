const btn = document.getElementById("btn");
const winnerL = document.getElementById("winner_l");
const winnerS = document.getElementById("winner_s");
const counterL = document.getElementById("count_l");
const counterS = document.getElementById("count_s");
const timerDisplay = document.querySelector(".time_left");
const reloadButton = document.getElementById("re_btn");
const buttons = document.querySelectorAll("[data-time]");

let time = 0;
let clicked = false;

function getTheTime(event) {
  event.preventDefault();
  event.target.setAttribute("disabled", true);
  time = document.getElementById("time").value;
  if (time === "") {
    timerDisplay.innerHTML = "no time specified";
  } else {
    clicked = true;
    timerDisplay.innerHTML = time; 
  }
  setCounter(time);
}
btn.addEventListener("click", getTheTime);

function setCounter(time) {
  setInterval(() => {
    time--;
    if ((time > 0)) {
      timerDisplay.innerHTML = time;
    } else if(time === 0){
      timerDisplay.innerHTML = "End of the game"; 
    }
  }, 1000);
}

reloadButton.addEventListener("click", function() {
  document.location.reload(true);
});

const countPress = event => {
  const keyValue = event.key;
  if (clicked && keyValue === "l") {
    countL = parseInt(counterL.textContent || 0);
    counterL.textContent = countL + 1;
  } else if (clicked && keyValue === "s") {
    countS = parseInt(counterS.textContent || 0);
    counterS.textContent = countS + 1;
  }
  return false;
};
document.addEventListener("keyup", countPress);

const getTheWinner = () => {
  if (counterS.innerHTML === "" && counterL.innerHTML === "" && time === "") {
    winnerL.textContent = "";
    winnerS.textContent = "";
  } else if (counterS.innerHTML === "" && counterL.innerHTML === "") {
    winnerL.textContent = "You forgot to play";
    winnerS.textContent = "You forgot to play";
  } else if (counterS.innerHTML > counterL.innerHTML) {
    winnerS.textContent = "You won!";
  } else if (counterS.innerHTML < counterL.innerHTML) {
    winnerL.textContent = "You won!";
  } else if (counterS.innerHTML === counterL.innerHTML) {
    winnerL.textContent = "You are both equaly good";
    winnerS.textContent = "You are both equaly good";
  }
};
const timeOut = () => setTimeout(getTheWinner, time * 1000);
btn.addEventListener("click", timeOut);

//Optional
function startButtonTimer(event) {
buttons.forEach(button => button.setAttribute("disabled", true));

  event.preventDefault();

  clicked = true;
  winnerL.textContent = "";
  winnerS.textContent = "";
  time = (parseInt(this.dataset.time));
  timerDisplay.innerHTML = time; 
  setCounter(time);
}

buttons.forEach(button => button.addEventListener("click", startButtonTimer));
buttons.forEach(button => button.addEventListener("click", timeOut));
reloadButton.addEventListener("click", function() {
  document.location.reload(true);
});