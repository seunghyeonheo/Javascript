console.log('my' + 'dog');
console.log('1' + 2);
console.log(`string literals : 1+2= ${1+2}`);
console.log(1 + 1);
console.log(1 - 1);
console.log(1 / 1);
console.log(1 * 1);
console.log(5 % 2);
console.log(2 ** 3);

let counter = 2;
const preIncrement = ++counter;
console.log(`preIncrement: ${preIncrement},counter: ${counter}`);

const postIncrement = counter++;
console.log(`postIncrement:${postIncrement}, counter:${counter}`);

//연산 후 할당 연산

let x = 3;
let y = 6;
console.log(x += y);
console.log(x -= y);
console.log(x /= y);
console.log(x *= y);

console.log(10 < 6);
console.log(10 <= 6);
console.log(10 > 6);
console.log(10 >= 6);

//논리연산

const value1 = true;
const value2 = 4 < 2;

console.log(`or: ${value1 || value2 || check()}`);
console.log(`and: ${value1 && value2 && check()}`);

function check(){
    for(let i = 0; i<10; i++){
        console.log('waiting');
    }
    return true;
}

console.log(!value1);

//equality(==, ===)

const stringfive = '5';
const numberfive = 5;

console.log(stringfive == numberfive);
console.log(stringfive != numberfive);

console.log(stringfive === numberfive);
console.log(stringfive !== numberfive);

console.log('-------------------');
const js1 = {name: 'js'};
const js2 = {name: 'js'};
const js3 = js1;
console.log(js1 == js2); 
console.log(js1 === js2);
console.log(js1 === js3);







