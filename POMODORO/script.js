const mode = document.getElementById("mode");
const timer = document.getElementById("timer");

const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");

const workCount = document.getElementById("workCount");
const breakCount = document.getElementById("breakCount");
let workTime = 25 * 60;
let breakTime = 10 * 60;

let currentTime = workTime;

let isWork = true;

let timerInterval;
let workSessions = Number(localStorage.getItem("work")) || 0;
let breakSessions = Number(localStorage.getItem("break")) || 0;

workCount.innerText = workSessions;
breakCount.innerText = breakSessions;


function updateTimer() {

    let minutes = Math.floor(currentTime / 60);

    let seconds = currentTime % 60;

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    timer.innerText = minutes + ":" + seconds;

}
function startTimer() {

    if (timerInterval) {
        return;
    }

    timerInterval = setInterval(function () {

        currentTime--;

        updateTimer();

        if (currentTime <= 0) {

            clearInterval(timerInterval);
            timerInterval = null;

            if (isWork) {

         workSessions++;

workCount.innerText = workSessions;

localStorage.setItem("work", workSessions);
                

                isWork = false;

                mode.innerText = "Break Time";

                currentTime = breakTime;

            }
            else {

                breakSessions++;

breakCount.innerText = breakSessions;

localStorage.setItem("break", breakSessions);
                
                isWork = true;

                mode.innerText = "Work Time";

                currentTime = workTime;

            }

            updateTimer();

            startTimer();

        }

    }, 1000);

}


function pauseTimer() {

    clearInterval(timerInterval);

    timerInterval = null;

}
function resetTimer() {

    clearInterval(timerInterval);

    timerInterval = null;

    currentTime = workTime;
    

    isWork = true;

    mode.innerText = "Work Time";

    updateTimer();

}
startBtn.addEventListener("click", startTimer);

pauseBtn.addEventListener("click", pauseTimer);

resetBtn.addEventListener("click", resetTimer);
updateTimer();