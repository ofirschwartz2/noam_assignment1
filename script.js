//document.write("Basketball Game!");
var timeLeft = 4;
var ballID;
var score = false;
setInterval(decreaseTimer, 1000);

function checkResult() {
    if (score) {
        window.alert("WIN");
    } else {
        window.alert("LOSE");
    }
    score = false;
    document.getElementById("ball").append(document.getElementById(ballID));
}

function decreaseTimer() {
    if (timeLeft == 0) {
        checkResult();
        timeLeft = 4;
    } else {
        timeLeft--;
    }
    document.getElementById("timer").innerHTML = timeLeft;
}

function allowDrop(ev) {
    ev.preventDefault();
}

function dragStart(ev) {
    ballID = ev.target.id;
}

function drop(ev) {
    ev.target.append(document.getElementById(ballID));
    score = true;
}