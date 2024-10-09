let time = null;
let stopWatchOnLoad = null;
const countdownSpan = document.getElementById("countdown");
const params = new URLSearchParams(window.location.search)

if (localStorage.getItem("stopWatch") || params.get('timer')) {
  time = parseInt(localStorage.getItem("stopWatch")) || parseInt(params.get('timer'));
  stopWatchOnLoad = setInterval(() => {
    countdownSpan.innerHTML = time--;
    localStorage.setItem("stopWatch", time);

    if (time === -1) {
      clearInterval(stopWatchOnLoad);
    }
  }, 1000);
}

function startTimer() {
  time = document.getElementById("seconds").value;

  clearInterval(stopWatchOnLoad);
  let stopWatch = setInterval(() => {
    countdownSpan.innerHTML = time--;
    localStorage.setItem("stopWatch", time);

    if (time === -1) {
      clearInterval(stopWatch);
    }
  }, 1000);
}
