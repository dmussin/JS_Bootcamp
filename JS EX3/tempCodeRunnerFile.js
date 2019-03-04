
function learnJS(lang, callback) {
    console.log("я учу " + lang);
    callback();
}

 function done(){
     console.log("Я пройду завтра новый урок");
 }

learnJS("JavaScript", function() {
    console.log("я прошел 3 урок");
});

learnJS("HTML", done);