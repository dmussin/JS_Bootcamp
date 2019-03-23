function timer() {

     let deadLine = '2019-04-13';

    function getTimeRamaining(endtime){
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t/1000)% 60),
            minutes = Math.floor((t/1000/60)% 60),
            // hours = Math.floor((t/(1000*60*60))),
            hours = Math.floor((t/1000/60)% 24),
            days = Math.floor((t/(1000*60*60*24)));  

            return {
                'total' : t,
                'hours' : hours,
                'minutes' : minutes,
                'seconds' : seconds, 
                'days' : days
            };
    }

    function setClock(id, endtime) {
        let timer  = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            days = timer.querySelector('.days'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock () {
            let t = getTimeRamaining(endtime),
                // hours.textContent = t.hours;
                // minutes.textContent = t.minutes;
                // seconds.textContent = t.seconds;
                // days.textContent = t.days;

                // if (t.total <= 0) {
                //     clearInterval(timeInterval);
                // }



            //////////////////////////////////


                h = t.hours.toString(),
                m = t.minutes.toString(),
                s = t.seconds.toString(),
                d = t.days.toString();

            if (
                t.total <= 0 &&
                t.hours <= 0 &&
                t.minutes <= 0 &&
                t.seconds <= 0 &&
                t.days <= 0
            ) {
                hours.textContent = "00";
                minutes.textContent = "00";
                seconds.textContent = "00";
                days.textContent = "00";
                clearInterval(timeInterval);
            } else {
                hours.textContent = h.length < 2 ? `0${h}` : h;
                minutes.textContent = m.length < 2 ? `0${m}` : m;
                seconds.textContent = s.length < 2 ? `0${s}` : s;
                days.textContent = d.length < 2 ? `0${d}` : d;
            }
        }
    }

    setClock('timer', deadLine);

    body.addEventListener("click", e => {
        let target = e.target;

        if (target && target.classList.contains("info-header-tab")) {
            tab.forEach(function (e, i) {
                if (target == e) {
                    hideTabContent(0);
                    showTabContent(i);
                }
            });
        }
    }
    );
}

module.exports = timer;