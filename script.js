var timeLeft = 6;
var pause = false;

$('document').ready(function() {
    $('#ball').on('mousedown', function(e) {
        if (pause == true) return;
        e.preventDefault();
        var dr = $(this).addClass("drag").css("cursor", "move");
        height = dr.outerHeight();
        width = dr.outerWidth();
        ypos = dr.offset().top + height - e.pageY,
            xpos = dr.offset().left + width - e.pageX;
        $(document.body).on('mousemove', function(e) {
            var itop = e.pageY + ypos - height;
            var ileft = e.pageX + xpos - width;
            if (dr.hasClass("drag")) {
                dr.offset({ top: itop, left: ileft });
            }
        }).on('mouseup', function(e) {
            dr.removeClass("drag");
        });
    });
    setInterval(oneSecondPassed, 1000);
});

function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

function resetBallAndBasket() {
    if (pause) {
        setTimeout(resetBallAndBasket, 500);
    } else {
        $('#basket').css("border", "10px solid black");
        $('#ball').css("left", "");
        $('#ball').css("top", "");
    }
}

async function checkResult() {
    if (pause == true) return;
    let ballX = parseInt($('#ball').css("left").substring(0, 3));
    let ballY = parseInt($('#ball').css("top").substring(0, 3));
    console.log(ballX, ballY);
    if ((-40) <= ballY && ballY <= (-20) && 450 <= ballX && ballX <= 470) {
        $('#basket').css("border", "10px solid green");
    } else {
        $('#basket').css("border", "10px solid red");
    }
    sleep(2000).then(() => {
        resetBallAndBasket();
    });;
}

function oneSecondPassed() {
    if (pause == true) return;
    if (timeLeft == 0) {
        checkResult().then(() => {
            $('#ball').hide();
            timeLeft = 6;
        });
    } else {
        timeLeft--;
    }
    if (timeLeft <= 4) {
        $('#ball').show();
        $('#timer').text(timeLeft);
    } else {
        $('#timer').text('Get Ready');
    }
}

function pauseClicked() {
    if (pause) {
        $('#pauseButton').text("Pause");
    } else {
        $('#pauseButton').text("Continue");
    }
    pause = !pause;
}