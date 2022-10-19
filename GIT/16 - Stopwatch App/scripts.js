let btnStart = document.querySelector('.start');
let btnStop = document.querySelector('.stop');
let btnRestart = document.querySelector('.restart');

let hours = document.querySelector('.hours');
let minutes = document.querySelector('.minutes');
let seconds = document.querySelector('.seconds');

hours.innerHTML = '00:';
minutes.innerHTML = '00:';
seconds.innerHTML = '00';

let sec = 0;
let min = 0;
let h = 0;

let cron;

function startClock(){
    stopClock();

    cron = setInterval(function(){
        sec++;  
        if(sec < 10){
            seconds.innerHTML = '0' + sec;  
        }else{
            seconds.innerHTML = sec;  
        }

        if(sec == 60){
            sec = 0;
            min++
            minutes.innerHTML = min + ':';  
            if(min < 10){
                minutes.innerHTML = '0' + min + ':';
            }else{
                minutes.innerHTML = min + ':';
            }
        }

        if(min == 60){
            min = 0;
            h++;
            if(h < 10){
                hours.innerHTML = '0' + h + ':';
            }else{
                hours.innerHTML = h + ':';
            }
        }

    },1000)
}

function stopClock(){
    clearInterval(cron);
}

function restartClock(){
    hours.innerHTML = '00:';
    minutes.innerHTML = '00:';
    seconds.innerHTML = '00';

    sec = 0;
    min = 0;
    h = 0;
}

btnStart.addEventListener('click', startClock);
btnStop.addEventListener('click', stopClock);
btnRestart.addEventListener('click', restartClock);