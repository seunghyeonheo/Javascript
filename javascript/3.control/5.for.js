// 반복문 Loop Statement
// for(변수선언문; 조건식; 증감식){}
// 실행순서:
// 1. 변수선언문
// 2. 조건식의 값이 참이면 {} 코드블록을 수행 
// 3. 증감식을 수행
// 4. 조건식이 거짓이 될 때까지 2번과 3번을 반복함

for(let i = 0; i<5; i++){
 for(let j = 0; j<5; j++){
     console.log(i,j);
 }
}

//무한루프 
//for (;;){
//}

for (let i = 0; i < 20; i++) {
    if (i===10){
        console.log('i가 드디어 10이 되었다!');
        continue; // 조건이 맞으면 바로 그 다음으로 넘어가라! 
        break; //반복문을 그만 두고 싶을 때
    }
    console.log(i);
}