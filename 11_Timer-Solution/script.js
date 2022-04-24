var timeBegan = null; //Did the clock start?
var timeStopped = null; //At what time was the timer stopped?
var stoppedDuration = 0; //How long was the timer stopped?
var startInterval = null; //This is needed to stop the startInterval() method
var flag = false; //To control the start/stop of the timer

const timerContainer = document.querySelector('.timer-container');

timerContainer.addEventListener('click', ()=>{
    if(!flag){
        startTimer();
        flag = true;
    } else{
        stopTimer();
        flag = false;
    }
})

timerContainer.addEventListener('dblclick',()=>{
    resetTimer();
})

function startTimer() 
{
    if(timeBegan === null)
        timeBegan = new Date();

    if(timeStopped !== null)
        stoppedDuration += (new Date() - timeStopped);

    startInterval = setInterval(clockRunning, 10);
}

function stopTimer() 
{
    timeStopped = new Date();
    clearInterval(startInterval);
}

function clockRunning() 
{
    var currentTime = new Date();
    var timeElapsed = new Date(currentTime - timeBegan - stoppedDuration);

    var minutes = timeElapsed.getUTCMinutes();
    var seconds = timeElapsed.getUTCSeconds();
    var milliseconds = timeElapsed.getUTCMilliseconds();

    milliseconds = Math.floor(milliseconds/10);

    document.querySelector('#timer-display').innerHTML = 
    (minutes = minutes < 10 ? '0' + minutes:minutes) + ":" +
    (seconds = seconds < 10 ? '0' + seconds:seconds) + ":" +
    (milliseconds = milliseconds < 10 ? '0' + milliseconds:milliseconds);
}

function resetTimer() 
{
    clearInterval(startInterval);
    timeBegan = null;
    timeStopped = null;
    stoppedDuration= 0;
    flag = false;
    document.querySelector('#timer-display').innerHTML = "00:00:00";
}

