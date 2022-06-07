//object literal {key: value}
// new Object()
// Object.create();
//key - 문자, 숫자, 문자열, 심볼
//value - 원시값, 객체 (함수)

let apple = {
    name: 'apple',
    'hello-bye': '🖐',
    0: 1, //0은 key. key는 객체에서 데이터에 접근할 때 사용함. 1은 value
    ['hello-bye1']: '🖐', //대괄호 안에 문자열을 넣어 키를 선언할 수 있다.
};

// 속성(데이터)에 접근하기 위해서는 마침표 표기법 또는 대괄호 표기법을 사용해서 접근할 수 있다. 
apple.name; //마침표 표기법 dot notation
console.log(apple.name);
console.log(apple['hello-bye1']); //대괄호 표기법 bracket notation
apple['name'];

//객체에 동적으로 속성을 추가할 수도 있다.
apple.emoji = '🍎';
console.log(apple.emoji);
console.log(apple['emoji']);

//속성 삭제
delete apple.emoji;
console.log(apple);