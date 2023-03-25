let g = false
let countDown = new Date("April 1, 2023, 0:0:0").getTime()
let time = setInterval(function() {
    let now = new Date().getTime();
    let distance = countDown - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("clock").innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (distance <= 0) {
        clearInterval(time);
        document.getElementById("clock").innerHTML = "???";
        document.getElementById("lowerText").innerHTML = "The day has come";
        g = true
    }
}, 1000);
