const timerDisplay = document.getElementById('timer');
const workTimeInput = document.getElementById('work-time');
const breakTimeInput = document.getElementById('break-time');
const startBtn = document.getElementById('start-btn');

let workTime = 25;
let breakTime = 5;
let timeLeft = workTime * 60;
let timerId;

function startTimer() {
  workTime = workTimeInput.value;
  breakTime = breakTimeInput.value;
  timeLeft = workTime * 60;
  timerDisplay.textContent = formatTime(timeLeft);
  startBtn.disabled = true;
  timerId = setInterval(countdown, 1000);
}

function countdown() {
  timeLeft--;
  timerDisplay.textContent = formatTime(timeLeft);
  if (timeLeft === 0) {
    clearInterval(timerId);
    if (timerDisplay.classList.contains('work')) {
      timerDisplay.classList.remove('work');
      timerDisplay.classList.add('break');
      timeLeft = breakTime * 60;
      timerDisplay.textContent = formatTime(timeLeft);
      timerId = setInterval(countdown, 1000);
    } else {
      timerDisplay.classList.remove('break');
      timerDisplay.classList.add('work');
      timeLeft = workTime * 60;
      timerDisplay.textContent = formatTime(timeLeft);
      startBtn.disabled = false;
    }
  }
}

function formatTime(time) {
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

startBtn.addEventListener('click', startTimer);