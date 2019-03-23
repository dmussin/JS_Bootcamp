let user = (function(){
    let privat = function(){
        console.log('I am privat');
    };

    let sayHello = function(){
        console.log('Hello!'); 
      };

    return {
        sayHello: sayHello
    };
}());

console.log(user);
console.log(user.sayHello());