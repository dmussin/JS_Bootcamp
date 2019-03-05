'use strict';

var str = "урок-3-был слишком легким";

let text = str.charAt(0).toUpperCase() + str.slice(1);
text = str.replace(/-/g, " ");

console.log(text);

let text1 = text.substr(0, 18);
let text2 = text1.slice(0, -2) + "o" + "o";
console.log(text2);