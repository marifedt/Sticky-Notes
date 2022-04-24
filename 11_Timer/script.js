var ms = document.querySelector('.ms');
var minute = document.querySelector('.minute');
var seconds = document.querySelector('.sec');
var container = document.querySelector('.timer-container');

var min = 0;
var sec = 0;
var millisec = 0;

var myInterval = '';
//for knowing if the timer starts or stops
//1 for stop and 0 for start
var stopTime = 1;

container.addEventListener('dblclick',()=>{
    ms.innerHTML = '00';
    minute.innerHTML = '00';
    seconds.innerHTML = '00';
    min = 0;
    sec = 0;
    millisec =0;
    stopTime = 1;
})

function initTimer() {
if(stopTime === 1){
    stopTime = 0;
    timerCycle();
} else{
    stopTime = 1;
    clearInterval(myinterval);
}

}
function timerCycle() {
    if(stopTime == 0){
        millisec = parseInt(millisec);
        sec = parseInt(sec);
        min = parseInt(min);


        millisec = millisec + 1;
        if(millisec == 60){
            sec = sec + 1;
            millisec = 0;
        }
        if(sec == 60){
            min = min + 1;
            sec = 0;
            millisec = 0;
        }

        if(millisec < 10 || millisec == 0){
            millisec = '0' + millisec;
        }
        if(sec < 10 || sec == 0){
            sec = '0' + sec;
        }
        if(min < 10 || min == 0){
            min = '0' + min;
        }
       
        ms.innerHTML = millisec;
        minute.innerHTML = min;
        seconds.innerHTML = sec;


        setTimeout("timerCycle()", 10);
        
    }
}


