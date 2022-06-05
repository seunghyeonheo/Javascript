//while(조건) {}
// 조건이 false가 될 때까지 {} 코드를 반복 실행

let num = 5;
while(num >= 0){
    console.log(num);
    num--;
}

let isActive = true;
let i = 0;
while(isActive){
    console.log("아직 살아있다");
    if( i===1000 ){
        break;
    }
    i++;
}

//조건이 맞을 때만 실행하고 싶으면 while문


do {
    console.log('do');
} while (isActive);

//조건 상관없이 꼭 한번은 실행하고 싶으면 do-while문 

