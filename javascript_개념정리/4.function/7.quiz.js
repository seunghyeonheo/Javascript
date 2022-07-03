// 주어진 숫자만큼 0부터 순회하는 함수 
// 순회하면서 주어진 특정한 일을 수행해야 함 
// 순회하는 숫자를 다 출력하고 싶음
// 순회하는 숫자의 두배값을 다 출력하고 싶음
// function iterate(max, action)

function iterate(max,action) {
    for(let i=0; i < max; i++) {
        action(i);
    }
}

function log(num) {
    console.log(num);
}
//함수 로그 만들기(숫자를 출력하는 함수)

function doubleAndLog(num){
    console.log(num*2);
}


iterate(3,log);
iterate(3,doubleAndLog);


iterate(3, (num) => console.log(num));
iterate(3, (num) => console.log(num*2));


//콜백 함수 사용예
setTimeout(()=> {
    console.log("3초 뒤 함수가 실행됩니다.");
}, 3000);