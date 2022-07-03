// 함수 선언문 function name(){}
// 함수 표현식 const name = function(){}


let add = function (a,b){
    return a+b;
};


// 화살표 함수 const name = () => {}
console.log(add(1,2));
add = (a,b) => {
    return a+b;
 }

 //생략 가능 version 
 add = (a,b) => a+b;
console.log(add(1,2));

//생성자 함수 const object = new Function(); //객체 편에서 다룸

//IIFE (Immedicately-Invoked Function Expression)
(function run(){
    console.log('👩👩');
})();
//함수를 선언하는 동시에 바로 호출하고 싶을 때 사용

