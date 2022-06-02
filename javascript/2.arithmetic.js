//산술 연산자(Arithmetic operators)
//+ 더하기
//- 빼기
//* 곱하기
// / 나누기
// % 나머지값
// ** 지수 

console.log(3+1);
console.log(5-1);
console.log(6*2);
console.log(8/4);
console.log(5**2); //es7
console.log(Math.pow(5,2));

//+ 연산자 주의점!

let text = "두개의" + "문자를 더하면" + "문자가 합쳐진다."
console.log(text);
text = '2' + 3; //숫자와 문자열을 더하면 문자열로 변환됨
console.log(text);