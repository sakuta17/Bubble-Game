var timer = 60;
var score = 0;

function bubbles() {
  var clutter = "";

  for (var i = 0; i < 126; i++) {
    var rndm = Math.floor(Math.random() * 10);

    clutter += `<div class="bubble">${rndm}</div>`;
  }

  document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer() {
  var TimerOn = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#Timer").textContent = timer;
    } else {
      clearInterval(TimerOn);
      document.querySelector("#pbtm").innerHTML = `<h1> GAME OVER!</h1>`;
      document.querySelector("#pbtm").style.justifyContent = "center";
      //   document.querySelector("#pbtm").style.alignItems = "center";
    }
  }, 1000);
}

function newScore() {
  score += 10;
  document.querySelector("#scoreBox").textContent = score;
}

function hitBox() {
  var rndm = Math.floor(Math.random() * 10);
  document.querySelector("#Hit").textContent = rndm;
  document.querySelector("#pbtm").addEventListener("click", function (dets) {
    var targetNum = Number(dets.target.textContent);
    if (rndm == targetNum) {
      newScore();
      bubbles();
      hitBox();
    }
  });
}

bubbles();
runTimer();
hitBox();
