function calc() {

    // Calculator 

    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        counter = document.querySelector('.counter'),
        personsSum = 0,
        daysSum = 0,
        total = 0;

        totalValue.innerHTML = 10;

        // persons.addEventListener('change', function(){
        //     personsSum = +this.value;
        //     total = (daysSum + personsSum)* 4000;

        //     if(restDays.value == '') {
        //         totalValue.innerHTML = 0;
        //     } else {
        //         totalValue.innerHTML = total;
        //     }
        // });

        // restDays.addEventListener('change', function(){
        //     daysSum = +this.value;
        //     total = (daysSum + personsSum)* 4000;

        //     if(persons.value == '') {
        //         totalValue.innerHTML = 0;
        //     } else {
        //         totalValue.innerHTML = total;
        //     }
        // });

        // place.addEventListener('change', function(){
        //     if (restDays.value == '' || persons.value == '') {
        //         totalValue.innerHTML = 0;
        //     } else {
        //         let a = total; 
        //         totalValue.innerHTML = a * this.options[this.selectedIndex].value;
        //     }
        // });


    function calcTotal() {
        let person = +persons.value,
            days = +restDays.value,
            city = +place.value;
        if ((person == '' || days == '') || (person == 0 || days == 0)) {
            totalValue.textContent = 0;
        } else {
            totalValue.textContent = (days + person) * 4000 * city;
        }
    }

    counter.addEventListener('input', function (event) {
        let target = event.target;

        if (target && target.classList.contains('counter-block-input')) {
            calcTotal();
        }
        if (target && target.options) {
            calcTotal();
        }
    });
}

module.exports = calc;