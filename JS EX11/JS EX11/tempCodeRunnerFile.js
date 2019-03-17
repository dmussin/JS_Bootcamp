function makeArray(){
    var items = [];

    for (var i = 0; i < 10; i++){
        var item = function(){
            console.log(i);
        };

        items.push(item);
    } 
}