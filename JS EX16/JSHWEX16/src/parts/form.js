function form(){

let message = {
        loading: 'Загрузка...',
        succes: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так :(' 
    };

    let form = document.getElementsByClassName('main-form')[0],
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div'),
        contactForm = document.getElementById('form');

        statusMessage.classList.add('status');



        function sendForm(elem) {
            elem.addEventListener('submit', function(e){
                e.preventDefault();
                elem.appendChild(statusMessage);
    
                let formData = new FormData(elem);
    
                function postData(data) {
                    return new Promise(function(resolve, reject) {
                        let request = new XMLHttpRequest();
    
                        request.open('POST', 'server.php');
    
                        request.setRequestHeader(
                            'Content-Type', 'application/json; charset=utf-8'
                        );
    
                        request.onreadystatechange = function(){
                            if (request.readyState < 4) {
                                resolve()
                            } else if (request.readyState === 4) {
                                if (request.status == 200 && request.status < 3) {
                                    resolve()
                                    // statusMessage.textContent = message.success;
                                } else {
                                    reject()
                                }
                            }
                        }
                        request.send(data);
                    })
                } 
    
                function clearInputs() {
                    for (let i = 0; i < input.length; i++) {
                        input[i].value = '';
                    }
                }
                postData(formData)
                    .then(() => (statusMessage.innerHTML = message.loading))
                    // .then(() => (statusMessage.innerHTML = message.success))
                    .then(() => {
                        thanksModal.style.display = 'block';
                        mainModal.style.display = 'none';
                        statusMessage.innerHTML = '';
                    })
                    .catch(() => (statusMessage.innerHTML = message.failure))
                    .then(clearInputs);
            });
        }
    
        sendForm(form);
        sendForm(contactForm);

   

        // ----------------




    // form.addEventListener('submit', function(event){
    //     event.preventDefault();
    //     form.appendChild(statusMessage);

    //     let request = new XMLHttpRequest();
    //     request.open('POST', 'server.php');
    //     // request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    //     request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

    //     let formData = new FormData(form);

    //     let obj = {};
    //     formData.forEach(function(value, key){
    //         obj[key] = value;
    //     });

    //     let json = JSON.stringify(obj);

    //     request.send(json);

    //     request.addEventListener('readystatechange', function(){
    //         if (request.readyState < 4 ) {
    //             statusMessage.innerHTML = message.loading;
    //         } else if (request.readyState === 4 && request.status == 200) {
    //             statusMessage.innerHTML = message.succes;
    //         } else {
    //             statusMessage.innerHTML = message.failure;
    //         }
    //     });

    //     for(let i = 0; i < input.length; i++) {
    //         input[i].value = ' ';
    //     }
 

    // -----------------

        const inputsPhone = document.querySelectorAll('input[name="phone"]'),
        inputsCounter = document.querySelectorAll('.counter-block-input');

    // function onlyNumber(input) {
    //     input.onkeydown = function () {
    //         return (this.value = this.value.replace(/[^0-9]/g, ""));
    //     };
    // }
    function onlyNumber(input) {
        input.onkeydown = function () {
            return (this.value = this.value.replace(/[^0-9]/g, ""));
        };
    }
    [...inputsPhone].forEach(elem => onlyNumber(elem));
    [...inputsCounter].forEach(elem => onlyNumber(elem));




} 

module.exports = form;