// Описан в документации
import flatpickr from "flatpickr";
// Дополнительный импорт стилей
import "flatpickr/dist/flatpickr.min.css";

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    
  };

const start = document.querySelector('button');
start.disabled = true;

let todey = new Date;
let oneDate;


flatpickr('#datetime-picker',{
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        let newDate = new Date();
        if(selectedDates[0] < todey){
            window.alert('Please choose a date in the future');
            start.disabled = true;
        }
        else{
            start.disabled = false;
            let timE = selectedDates[0];
            return oneDate = timE - newDate;
            
        }
    },
})

start.addEventListener('click', play);
function play(){
    setInterval(() => {
        const second = 1000;
    oneDate = oneDate -= second;
    if(oneDate < 0) {
        return;
    }
    console.log(oneDate);
    convertMs(oneDate)
    }, 1000);
    
}

    function convertMs(ms) {
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;
        // Remaining days
        const days = Math.floor(ms / day);
        const dayS = document.querySelector('[data-days]');
        dayS.innerHTML = days;
        // Remaining hours
        const hours = Math.floor((ms % day) / hour);
        const hourS = document.querySelector('[data-hours]');
        hourS.innerHTML = hours;
        // Remaining minutes
        const minutes = Math.floor(((ms % day) % hour) / minute);
        const minuteS = document.querySelector('[data-minutes]');
        minuteS.innerHTML = minutes;
        // Remaining seconds
        const seconds = Math.floor((((ms % day) % hour) % minute) / second);
        const secondS = document.querySelector('[data-seconds]');
        secondS.innerHTML = seconds;
        return;
        // console.log({days, hours, minutes, seconds})
}
  
