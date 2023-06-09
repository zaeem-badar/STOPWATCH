var displayHours = document.getElementById("displayHours")
var displayMinutes = document.getElementById("displayMinutes")
var displaySeconds = document.getElementById("displaySeconds")
var startBtn = document.getElementById("startBtn")
var pauseBtn = document.getElementById("pauseBtn")
var resetBtn = document.getElementById("resetBtn")
var hours = 0
var minutes = 0
var seconds = 0
var interval;
pauseBtn.disabled = true
resetBtn.disabled =true

function render(){
    displayHours.innerHTML =hours
    displayMinutes.innerHTML=minutes
    displaySeconds.innerHTML=seconds
}
function Timer (){
    seconds++
    if (seconds == 60){
        minutes++
        seconds =0
    }
    else if(minutes ==60){
        hours++
        minutes=0
    }
    console.log(seconds)
    render()
    
}
function startStopWatch(){
    startBtn.disabled=true
    pauseBtn.disabled=false
    resetBtn.disabled=false
    interval = setInterval(function(){
        Timer()
    },1000)
}

function pauseStopWatch(){
    pauseBtn.disabled=true
    startBtn.disabled=false
    resetBtn.disabled=false
    clearInterval(interval)
    render()
    }
    function resetStopWatch(){
        pauseStopWatch()
        pauseBtn.disabled=true
        startBtn.disabled=false
        resetBtn.disabled=true
        hours=0
        minutes=0
        seconds=0
        render()
    }


