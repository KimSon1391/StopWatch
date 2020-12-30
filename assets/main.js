window.onload = function() {
    var tens = 00;
    var seconds = 00;
    var minutes = 00;
    var appentTens = document.getElementById('tens');
    var appentSeconds = document.getElementById('seconds');
    var appentMinutes = document.getElementById('minutes');
    var buttonStart = document.getElementById('btn--start');
    var buttonStop = document.getElementById('btn--stop');
    var buttonReset = document.getElementById('btn--reset');
    var Interval;

    buttonStart.onclick = function(){
        clearInterval(Interval);
        Interval = setInterval(startTime,10);
    }
    buttonStop.onclick = function() {
        clearInterval(Interval);
    }
    buttonReset.onclick = function() {
        clearInterval(Interval);
        tens = 0;
        seconds = 0;
        minutes = 0;
        appentTens.innerHTML = "0" + tens;
        appentSeconds.innerHTML = "0" + seconds;
        appentMinutes.innerHTML = "0" + minutes;
    }

    function startTime(){
        tens++;
        if(tens < 10) {
            appentTens.innerHTML = "0" + tens;
        } if(tens > 9) {
            appentTens.innerHTML = tens;
        } if(tens > 99) {
            seconds++;
            appentSeconds.innerHTML = "0" + seconds;
            tens = 0;
            appentTens.innerHTML = "0"  + tens;
        } if(seconds > 9){
            appentSeconds.innerHTML = seconds;
        } if(seconds > 58) {
            minutes++;
            appentMinutes.innerHTML = "0" + minutes;
            seconds = 0;
            tens = 0;
            appentSeconds.innerHTML = "0" + seconds;
            appentTens.innerHTML = "0"  + tens;
        }
    }
}
