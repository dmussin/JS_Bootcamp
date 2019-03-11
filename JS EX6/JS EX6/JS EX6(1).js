'use strict';

// alert("gbpkwr");


let btn = document.querySelectorAll('button'),
    wrap = document.querySelector('.wrapper'),
    link = document.querySelector('a');

btn[0].style.backgroundColor = 'black';

// btn[0].onclick = function() {
//    alert('Вы нажали первую кнопку'); 
// };

// btn[0].addEventListener('click', function(){
     
//     alert("Вы опять нажали первую кнопку"); 
// });

// btn[0].addEventListener('mouseenter', function() {
//     alert('Вы навели на первую кнопку');
// });


btn[0].addEventListener('click', function(event){
    // alert("Вы нажали первую кнопку"); 
    // let target = event.target;
    console.log('Эпроизошло событие: ' + event.type + ' на элементе ' 
    + event.target);
    // target.style.display = 'none';
});

wrap.addEventListener('click', function(){
    console.log('произошло событие: ' + event.type + ' на элементе ' 
    + event.target);
});


link.addEventListener('click', function(event){
    event.preventDefault();
    console.log('произошло событие: ' + event.type + ' на элементе ' 
    + event.target);
});

btn.forEach(function(item){
    item.addEventListener('mouseleave', function(){
        console.log("Вы вышли");
    });
});