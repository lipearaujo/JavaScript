let eventName = document.getElementById('eventName');
let inputDate = document.getElementById('inputDate');
let inputTime = document.getElementById('inputTime');
let evt = document.getElementById('name');
let evtDate = document.getElementById('eventDate');
let evtTime = document.getElementById('eventTime');
let days = document.getElementById('days');
let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');

let now;

const milisseconds = 86400000;
const msHours = 3600000;
const msMinutes = 60000; 
const msSeconds = 1000;



function submit() {
    let event = eventName.value;
    if(event !== ''){
        evt.innerHTML += `${event}`;
    }else{
        alert('O evento precisa de um nome');
        location.reload();
    }

    /*let time = inputTime.value;
    if(time !== ''){
        evtTime.innerHTML += `${time} h`;
    }else{
        evtTime.innerHTML += ' 18:00 h';
    }*/
    
    let date = inputDate.value;
    evtDate.innerHTML += `${date}`;
    let dates;
    
    setInterval(()=> {
        now = new Date().getTime();

        dates = new Date(date).getTime();
        
        let distance = dates - now;
    
        let distanceDays = Math.floor(distance / milisseconds);
        let distanceHours = Math.floor((distance % milisseconds) / msHours);
        let distanceMinutes = Math.floor((distance % msHours) /msMinutes);
        let distanceSeconds = Math.floor((distance % msMinutes) / msSeconds);
        
        days.innerHTML = distanceDays;
        hours.innerHTML = distanceHours;
        minutes.innerHTML = distanceMinutes;
        seconds.innerHTML = distanceSeconds;

        if(now >= dates){
            days.innerHTML = 'D';
            hours.innerHTML = 'O';
            minutes.innerHTML = 'N';
            seconds.innerHTML = 'E';
        }

    }, 1000);
   
    evt = '';
    evtDate = '';
    evtTime = '';
}