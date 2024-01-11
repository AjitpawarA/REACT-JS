
console.log("this is start")

myFun();

var myFun = function(){
    console.log("first");
}
console.log("this is middle ")
myFun();

function myFun(){
    console.log("second");
}

console.log("this is last" )
myFun();