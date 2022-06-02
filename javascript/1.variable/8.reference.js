let myAge = 24;
myAge = 27;
console.log(myAge);

let student = {
    name : 'yoonseo',
    age : 22,
    mbti : 'intp',
}; 

let mySister = student;
student.name = "jihyeon";

//student와 mySister는 동일한 메모리주소값(참조값)을 가짐 

console.log(mySister);
