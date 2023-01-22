const deadline = '01/22/2023 12:15:00';

function getTimeRemaining(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return {
        total,
        days,
        hours,
        minutes,
        seconds
    };
}

setInterval(() => {
    var time = getTimeRemaining(deadline);

    var string = `${time.minutes}m : ${time.seconds}s`;
    document.querySelector(".timer").innerHTML = string;
}, 1000);

var i = 0;
var txt = 'IcyOdSnowy Challenge';
var speed = 50;

function typeWriter() {
    if (i < txt.length) {
        document.querySelector(".bannerHeader").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

typeWriter();