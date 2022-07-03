// 삼항 조건 연산자 Ternary Operator
// 조건식 ? [참인경우] : [거짓인 경우]

let nctMember = 'DO';
if(nctMember === 'mark'){
    console.log("NCT");
}else {
    console.log('🤔');
}

nctMember === 'mark' ? console.log('NCT') : console.log('🤔');

let animal = 'cat';
let emoji = animal === 'cat' ? '😺' : '😀';
//emogi변수에 값을 할당할 건데 animal이 cat이면 '😺' 출력하고 아니면 '😀' 출력
console.log(emoji);