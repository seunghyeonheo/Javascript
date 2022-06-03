//증가 & 감소 연산자 Increment & Decrement Operators
let a = 1;
a++; // a=a+1
console.log(a);

a--; // a=a-1
console.log(a);

// 주의!
// a++ 필요한 연산을 하고, 그 뒤 값을 증가시킴 
// ++a 값을 먼저 증가하고, 필요한 연산을 함 
// a--

console.clear();

a=0;
let b = a++; //a먼저 b에 할당한 후 a는 나중에 1 증가됨
let c = ++a; //증가된 값을 출력하고 싶으면 증감 먼저 시키면 됨
console.log(b); //0
console.log(c); //2 (let b = a++; 식에서 a가 1이 되었기 때문에 콘솔창에 c를 입력하면 2가 나옴 )