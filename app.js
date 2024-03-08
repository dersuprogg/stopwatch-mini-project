"use strict";
// SELECT UI ELEMENTS
const startBtn = document.querySelector(".btn-start");
const stopBtn = document.querySelector(".btn-stop");
const resetBtn = document.querySelector(".btn-reset");
const minutesEl = document.querySelector(".minutes");
const secondsEl = document.querySelector(".seconds");
const millisecondsEl = document.querySelector(".milliseconds");
const display = document.querySelector(".display");
const lapsUl = document.querySelector(".laps");

let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let lapCount = 0;

function makePad(str, pad, length = 2) {
  while (str.length !== length) {
    str = pad + str;
  }
  return str;
}

startBtn.addEventListener("click", () => {
  display.classList.add("time-slip");
  const intervalId = setInterval(() => {
    milliseconds += 1;
    millisecondsEl.textContent =
      milliseconds <= 9 ? "0" + milliseconds : milliseconds;
    if (milliseconds >= 99) {
      milliseconds = 0;
      seconds += 1;
    }

    if (seconds >= 59) {
      seconds = 0;
      minutes += 1;
    }

    secondsEl.textContent = seconds <= 9 ? "0" + seconds : seconds;
    minutesEl.textContent = minutes <= 9 ? "0" + minutes : minutes;
  }, 10);

  stopBtn.addEventListener(
    "click",
    () => {
      lapCount++;
      clearInterval(intervalId);
      display.classList.remove("time-slip");
      const lap = document.createElement("li");
      const lapSeconds = seconds <= 9 ? "0" + seconds : seconds;
      const lapMinutes = minutes <= 9 ? "0" + minutes : minutes;
      const lapMilliseconds =
        milliseconds <= 9 ? "0" + milliseconds : milliseconds;
      lap.innerHTML = `LAP ${lapCount} &#8594 ${lapMinutes} : ${lapSeconds},${lapMilliseconds}`;
      lapsUl.append(lap);
    },
    { once: true }
  );
});

resetBtn.addEventListener("click", () => {
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  lapCount = 0;
  while (lapsUl.firstElementChild) {
    lapsUl.firstElementChild.remove();
  }
  minutesEl.innerHTML = "00";
  secondsEl.textContent = "00";
  millisecondsEl.textContent = "00";
});
