window.addEventListener('DOMContentLoaded', function(){
    'use strict';

    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')){
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function(event){
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')){
            for (let i = 0; i < tab.length; i++){
                if (target == tab[i]) {
                    hideTabContent(0);

                    showTabContent(i);
                    break;
                }
            } 
        }
    });

    // Timer 

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

    // MODAL 

    let more = document.querySelector('.more'),
        descriptionBtn = document.querySelectorAll('.description-btn'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

    more.addEventListener('click', function(){
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });

    descriptionBtn[0].addEventListener('click', function(){
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });

    close.addEventListener('click', function(){
        overlay.style.display = 'none';
        descriptionBtn.classList.remove('more-splash');
        document.body.style.overflow = '';
    });

    close.addEventListener('click', function(){
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });


});