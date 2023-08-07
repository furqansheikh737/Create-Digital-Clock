const hoursElem = document.getElementById("hours");
const minutesElem = document.getElementById("minutes");
const secondsElem = document.getElementById("seconds");
const ampmElem = document.getElementById("ampm");


setInterval(function () {
    const date = new Date();
    let hours = date.getHours();
    let ampm = "AM";
    if (hours > 11) {
        ampm = "PM";
        if (hours > 12) {
            hours -= 12;
        }
    }
    hoursElem.innerText = date.getHours();
    minutesElem.innerText = date.getMinutes();
    secondsElem.innerText = date.getSeconds();
    ampmElem.innerText = ampm;

}, 1000);