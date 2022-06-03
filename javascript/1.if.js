// 조건문 Conditional Statement
// if(조건) {}
// if(조건) {} else {}
// if(조건) {} else if {} else{}
//if 안에는 true나 false로 평가될 수 있는 표현식이 들어가는데, 이 조건이 맞을 때에만 코드블록이 실행됨! 


let leader = 'mark';
leader = 'who';
let maknae = 'jisung';
maknae = 'cute';
let center = 'jaemin';
center = 'beauty';
let citizen = '!!';

if(leader === 'mark'){
    console.log('🐱');
}else if(maknae === 'jisung'){
    console.log('🐹');
}else if(center === 'jaemin'){
    console.log('🐰');
}else{
    console.log('boom');
}