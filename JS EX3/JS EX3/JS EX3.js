// let num = 20;

// function showFirstMessage(text) {
//     alert(text);
//     let num = 1000; //Локальная функция не видна вне функции
//     console.log(num);
// }

// showFirstMessage("Hello Wolrld");
// console.log(num);

console.log(calc2(2,2));
console.log(calc2(6,3));

function calc2(a, b) {
    return (a + b);
}


// let calc =  function(a,b) {
//     return (a + b);
// }

// console.log(calc(3,5));
// console.log(calc(6,6));

            let calc3 = (a,b) => a+b
            console.log(calc3(3,9));
            console.log(calc3(6,0)); 



function retVar() {
    let num = 50; 
    return num;
}

let anotherNum = retVar();
console.log(anotherNum);

let str = "test";
console.log(str.length);

console.log(str.toUpperCase());
console.log(str.toLowerCase());

let twelve = "12.2";

console.log(Math.round(twelve));


let next = "12.3px";
console.log(parseInt(next));
console.log(parseFloat(next));



// ============================ Callback Func ================================

function first(){
    // doing something 
    setTimeout(function() {
        console.log(1); 
    }, 500);
}

function second(){
    console.log(2);
}

first();
second(); 

function learnJS(lang, callback) {
    console.log("я учу " + lang);
    callback();
}


learnJS("JavaScript", function() {
    console.log("я прошел 3 урок");
});

function done(){
    console.log("Я пройду завтра новый урок");
}

learnJS("HTML", done);