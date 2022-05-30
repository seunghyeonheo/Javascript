function printHello(){
    console.log('Hello');
}
printHello();

let p = printHello();
console.log(p);

function log(message){
    console.log('message');
}

log('Hello!');
log(12345);

function changeName(obj){
    obj.name = 'coder';
}

const kim = {name:'kim'};
changeName(kim);
console.log(kim);

function showMessage(message, from){
    console.log(`${message} by ${from}`);
}

function showMessage2(message, from='unknown'){
    console.log(`${message} by ${from}`);
}

showMessage2('hi');
console.log('---------------------------');
function printAll(...args){
    for(let i=0; i < args.length; i++){
        console.log(args[i]);
    }
    for(const arg of args){
        console.log(arg);
    }
    args.forEach((arg)=>console.log(arg));
}
 printAll('developer','coder','team');

 //local scope

 let globalMessage = 'global'; //전역변수
 function printMessage3(){
     let message = 'hello' //지역변수
     console.log(message);
     console.log(globalMessage);
 }

 printMessage3();
// console.log(message);

console.log('-------------------------');
console.log(sum(3,3));
function sum(a,b){
    return a+b;
}
 
const result = sum(1,2);
console.log(`sum:${result}`);
console.log(`sum:${sum(10,10)}`);

//print();
const print = function(){
    console.log('print');
};

print();

console.log('----------------------');
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1,2));

function randomQuiz(answer, printYes, printNo){
    if(answer === 'love you'){
        printYes();
    }else{
        printNo();
    }
}

const printYes = function(){
    console.log('Yes!');
}

const printNo = function print(){
    console.log('No!');
}

randomQuiz('wrong',printYes, printNo);
randomQuiz('love you', printYes, printNo);

const simplePrint = function(){
    console.log('simplePrint');
}

simplePrint();


const simplePrint2 = () => console.log('simplePrint2');
simplePrint2();

(function hello(){
    console.log('IIFE');
})();
