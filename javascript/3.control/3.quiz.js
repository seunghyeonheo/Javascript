//퀴즈! 

let num = 2;
//num의 숫자가 짝수이면 👍, 홀수라면 👎을 출력
//if 와 ternary 방식 사용


if(num%2 === 0){
    console.log('👍');
}else{
    console.log('👎');
}

//ternary
let emoji = num%2 === 0 ? '👍' : '👎';
console.log(emoji);