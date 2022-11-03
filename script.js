let secondsRemaining;
let intervalHandle;

function setAlarm() {}

const audio = new Audio("alarm.mp3");

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

function tick() {
  let timeDisplay = document.getElementById("time");

  let min = Math.floor(secondsRemaining / 60);
  let sec = secondsRemaining - min * 60;

  if (sec < 10) {
    sec = "0" + sec;
  }

  let message = min.toString() + ":" + sec;

  timeDisplay.innerHTML = message;

  if (secondsRemaining === 0) {
    playAlarm();
    clearInterval(intervalHandle);
  }

  secondsRemaining--;
}

function startCountdown() {
  let minutes = document.getElementById("minutes").value;

  if (isNaN(minutes)) {
    alert("Please enter a number");
    return;
  }

  secondsRemaining = minutes * 1; // input 5, 5 seconds only
  //secondsRemaining = minutes * 60;

  intervalHandle = setInterval(tick, 1000);
}

function stop() {
  pauseAlarm();
  clearInterval(intervalHandle);
}

window.onload = function () {
  let inputMinutes = document.createElement("input");
  inputMinutes.setAttribute("id", "minutes");
  inputMinutes.setAttribute("type", "text");

  let startButton = document.getElementById("set-alarm-button");
  startButton.onclick = function () {
    startCountdown();
  };

  let stopButton = document.getElementById("stop-alarm-button");
  stopButton.onclick = function () {
    stop();
  };

  document.getElementById("alarm-set-field").appendChild(inputMinutes);
};
