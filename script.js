//document.write("Basketball Game!");
var timeLeft = 4;
setInterval(decreaseTimer, 1000);

function decreaseTimer() {
    if (timeLeft == 0) {
        timeLeft = 4;
    } else {
        timeLeft--;
    }
    document.getElementById("timer").innerHTML = timeLeft;
}