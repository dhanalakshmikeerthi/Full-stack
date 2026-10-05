let currentSeconds = 0
let targetSeconds = 0
let timerId = null

const HoursDiv = document.getElementsByClassName("hours")[0]
const MinutesDiv = document.getElementsByClassName("minutes")[0]
const SecondsDiv = document.getElementsByClassName("seconds")[0]
const targetInput = document.getElementById("targetSeconds")
const startButton = document.getElementById("startTimerBtn")

function updateDisplay(totalSeconds) {
 const hours = Math.floor(totalSeconds / 3600)
 const minutes = Math.floor((totalSeconds % 3600) / 60)
 const seconds = totalSeconds % 60

 HoursDiv.textContent = String(hours).padStart(2, "0")
 MinutesDiv.textContent = String(minutes).padStart(2, "0")
 SecondsDiv.textContent = String(seconds).padStart(2, "0")
}

function startTimer() {
 clearInterval(timerId)

 targetSeconds = Number(targetInput.value) || 0
 currentSeconds = 0
 updateDisplay(currentSeconds)

 timerId = setInterval(() => {
 if (currentSeconds >= targetSeconds) {
 clearInterval(timerId)
 alert("Timer finished")
 return
 }

 currentSeconds += 1
 updateDisplay(currentSeconds)
 }, 1000)
}

startButton.addEventListener("click", startTimer)
updateDisplay(currentSeconds)

