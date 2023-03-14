const hoursEl = document.querySelector(".hour"),
    minutesEl = document.querySelector(".minute"),
    secondsEl = document.querySelector(".second")

function clock(){
    var date = new Date();
    hoursEl.innerHTML = date.getHours();
    minutesEl.innerHTML = date.getMinutes();
    secondsEl.innerHTML = date.getSeconds();
}
setInterval(clock,10)