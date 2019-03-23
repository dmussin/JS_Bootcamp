function modal() {

    // let more = document.querySelector('.more'),
    //     descriptionBtn = document.querySelectorAll('.description-btn'),
    //     overlay = document.querySelector('.overlay'),
    //     close = document.querySelector('.popup-close');

    // more.addEventListener('click', function(){
    //     overlay.style.display = 'block';
    //     this.classList.add('more-splash');
    //     document.body.style.overflow = 'hidden';
    // });

    // descriptionBtn[0].addEventListener('click', function(){
    //     overlay.style.display = 'block';
    //     this.classList.add('more-splash');
    //     document.body.style.overflow = 'hidden';
    // });

    // close.addEventListener('click', function(){
    //     overlay.style.display = 'none';
    //     descriptionBtn.classList.remove('more-splash');
    //     document.body.style.overflow = '';
    // });

    // close.addEventListener('click', function(){
    //     overlay.style.display = 'none';
    //     more.classList.remove('more-splash');
    //     document.body.style.overflow = '';
    // });


    const overlay = document.querySelector(".overlay");

    function showModal(modBtn) {
        overlay.style.display = "block";
        info.classList.add("more-splash");
        document.body.style.overflow = "hidden";
    }

    function hideModal(modCloseBtn) {
        overlay.style.display = "none";
        info.classList.remove("more-splash");
        document.body.style.overflow = "";
    }

    if (target && target.classList.contains("more")) {
        showModal(target);
    }
    if (target && target.classList.contains("popup-close")) {
        hideModal(target);
    }
    if (target && target.classList.contains("description-btn")) {
        showModal(target);
    }
}

module.exports = modal;