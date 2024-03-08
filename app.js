"use strict";
// SELECT UI ELEMENTS
const startBtn = document.querySelector(".btn-start");
const stopBtn = document.querySelector(".btn-stop");
const resetBtn = document.querySelector(".btn-reset");
const minutesEl = document.querySelector(".minutes");
const secondsEl = document.querySelector(".seconds");
const millisecondsEl = document.querySelector(".milliseconds");

let minutes = 0;
let seconds = 0;
let milliseconds = 0;

startBtn.addEventListener("click", () => {
  setInterval(() => {
    milliseconds += 1;
    millisecondsEl.textContent = milliseconds;
    if (milliseconds > 100) {
      milliseconds = 0;
      seconds += 1;
    }

    if (seconds >= 59) {
      seconds = 0;
      minutes += 1;
    }

    secondsEl.textContent = seconds;
    minutesEl.textContent = minutes;
  }, 10);
});
