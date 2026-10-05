let seconds = 0;
let targetSeconds = 0;
let timerInterval = null;

function startTimer() {

    if (timerInterval !== null) {
        return;
    }

    if (targetSeconds === 0) {
        let minutes = prompt("Enter time in minutes:");

        if (minutes === null || minutes === "" || minutes <= 0) {
            alert("Please enter a valid number");
            return;
        }

        targetSeconds = Number(minutes) * 60;
    }

    timerInterval = setInterval(function () {

        seconds++;

        updateTimer();

        if (seconds >= targetSeconds) {
            clearInterval(timerInterval);
            timerInterval = null;

            alert("Time is completed!");
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

    seconds = 0;
    targetSeconds = 0;

    updateTimer();
}


function updateTimer() {

    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds % 3600) / 60);
    let secs = seconds % 60;

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    secs = String(secs).padStart(2, "0");

    document.getElementById("timer").innerText =
        hours + ":" + minutes + ":" + secs;
}