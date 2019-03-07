// // ============= NEW OBJECT ==================

// //let obj = new Object();  

// let options = {
//      width: 1024,
//      height: 1024,
//      name: "test"
// };

// // console.log(options.name);
// options.bool = false; 

// console.log(options)  ;

// options.colors = {
//     border: "black",
//     bg: "red"
// }; 
// delete options.bool;

// console.log(options);


// for (let key in options) {
//     console.log('Свойство ' + key + ' имеeт значение ' + options[key]);
// } 

// console.log(Object.keys(options).length);

// // Adding or deleting items from massive 

// // let arr = [1,2,3,4,5];
// // arr[99] = 99;

// // arr.pop();
// // arr.push("5");
// // arr.shift();
// // arr.unshift("1");

// // console.log(arr);

// // for (let i = 0; i < arr.length; i++) {
// //     console.log(arr[i]);
// // }


// // FOR EACH METHOD 
// let arr = ["first", 2, 3, "four", 5];

// arr.forEach(function(item, i, mass){
//     console.log(i + ': ' + item + " (массив: " + mass + ')');
// });

// console.log(arr);

// // ======== FOR OFF METHOD ===========

// let mass = [1, 3, 5, 7, 9];

// for (let key in(показывает KEY) mass) { 
//     for (let key of mass) {
//     console.log(key);
// }


// ==================

// let ans = prompt("", ""),
//     arr2 = [];

// arr2 = ans.split(',');
// console.log(arr2);    



//================ 

// let arr = ["sae", "sfeff", "123", "56y6"],
//     i = arr.join(', ');

// console.log(i);  
// console.log(arr); 


// ====================

// let arr = ["sae", "sfeff", "123", "56y6"],
//     i = arr.sort(compareNum);

//     function compareNum(a,b){
//         return a-b;
//     }

// console.log(i);  
// console.log(arr); 

// ==========  ===============

let solder = {
    health: 400, 
    armor: 100
}; 

let john = {
    health: 100
};

john.__proto__ = solder;
console.log(john);
console.log(john.armor);

