const stop_btn = document.getElementById("stop");
const start_btn = document.getElementById("start");
const reSet_btn = document.getElementById("reSet");
const Time_Opt = document.querySelector("h2");
let [seconds, minutes, hours] = [0, 0, 0];

let timer = null;

let stop_watch = () => {
  seconds++;
  if (seconds === 59) {
    minutes++;
    seconds = 0;
  }
  if (minutes === 59) {
    minutes = 0;
    hours++;
  }

  let hrs = hours > 10 ? hours : `0${hours}`;
  let mins = minutes > 10 ? minutes : `0${minutes}`;
  let secs = seconds > 10 ? seconds : `0${seconds}`;

  Time_Opt.textContent = `${hrs}:${mins}:${secs}`;
};

let start_time = () => {
  if (timer !== null) {
    clearInterval(timer);
    timer = null;
  } else {
    timer = setInterval(() => {
      stop_watch();
    }, 1000);
  }
};

start_btn.addEventListener("click", () => {
  if (start_btn.children[0].classList.contains("fa-play")) {
    start_btn.children[0].classList.replace("fa-play", "fa-pause");
  } else {
    start_btn.children[0].classList.add("fa-play");
  }
  start_time();
});

stop_btn.addEventListener("click", () => {
  clearInterval(timer);
  timer = null;
});

reSet_btn.addEventListener("click", () => {
    start_btn.children[0].classList.add("fa-play");
  clearInterval(timer);
  timer = null;
  [seconds, minutes, hours] = [0, 0, 0];
  Time_Opt.textContent = "00:00:00";
});
