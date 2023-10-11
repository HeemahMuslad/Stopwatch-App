let startTiming = false;
let intervalID;
let miniSec = "00";
let sec = "00";
let min = "00";
let hour = "00";

let timer = document.querySelector(".js-timer");
timer.innerHTML = `${hour} : ${min} : ${sec} : ${miniSec}`;
document.querySelector(".js-start-button").addEventListener("click", () => {
  intervalID1 = setInterval(() => {
    timer.innerHTML = `${hour} : ${min} : ${sec} : ${miniSec++}`;
  }, 100);
  intervalID2 = setInterval(() => {
    timer.innerHTML = `${hour} : ${min} : ${sec++} : ${miniSec}`;
  }, 1000);
  intervalID3 = setInterval(() => {
    timer.innerHTML = `${hour} : ${min++} : ${sec} : ${miniSec}`;
  }, 60000);
  intervalID4 = setInterval(() => {
    timer.innerHTML = `${hour++} : ${min} : ${sec} : ${miniSec}`;
  }, 600000);
  startTiming = true;
});
document.querySelector(".js-stop-button").addEventListener("click", () => {
  clearInterval(intervalID1);
  clearInterval(intervalID2);
  clearInterval(intervalID3);
  clearInterval(intervalID4);
  startTiming = false;
});
document.querySelector(".js-reset-button").addEventListener("click", () => {
  timer.innerHTML = `${(hour = "00")} : ${(min = "00")} : ${(sec =
    "00")} : ${(miniSec = "00")}`;
  clearInterval(intervalID);
  startTiming = false;
});
