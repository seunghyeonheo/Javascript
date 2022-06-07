// 함수 내부에서 외부로부터 주어진 인자의 값을 변경하는 것은 최악..
// 상태변경이 필요한 경우에는, 새로운 상태를(오브젝트,값) 만들어서 반환해야 함 
// 원시값 - 값에 의한 복사 
// 객체값 - 참조에 의한 복사(메모리주소)

function display(num) {
    num = 5; //인자값 변경 하지 않을 것!!!!!
    console.log(num);
}

const value = 4
display(value);
console.log(value);



// 인자값을 바꾼 경우 (심각한) 예제
function displayObj(obj){
    obj.name = 'emily'; //외부로부터 주어진 인자를 내부에서 변경 금지!!!
    console.log(obj);
}

const Seunghyeon = {name: 'Seunghyeon'}; //오브젝트만듦
displayObj(Seunghyeon);

console.log(Seunghyeon);

function changeName(obj){ //함수내부에서 무언가를 바꾸어야 한다면 이름부터 변경하는 느낌을 주도록! 
   return {...obj, name: 'emily'}; //반환할 때에는 새로운 오브젝트 만들기! 
}