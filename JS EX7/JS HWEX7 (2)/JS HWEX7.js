'use strict'

let timer = document.getElementsByClassName('timer')[0];

let clock = setTimeout(function timerRun() {
    let time = new Date(),
        h = time.getHours().toString(),
        m = time.getMinutes().toString(),
        s = time.getSeconds().toString();

    if (h.length < 2) {
        h = '0' + h;
    }
    if (m.length < 2) {
        m = '0' + m;
    }
    if (s.length < 2) {
        s = '0' + s;
    }
    timer.textContent = h + ':' + m + ':' + s;
    // color = '#' + h + m + s;

    // document.body.style.backgroundColor = '#' + h + m + s;;

    
    setTimeout(timerRun, 1000);

});