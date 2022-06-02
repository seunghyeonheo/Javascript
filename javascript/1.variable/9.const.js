// let은 변수의 재할당이 가능함
//const는 변수의 재할당이 불가능함. 상수, 변수, 하지만 변수의 값을 변경하는 것은 가능! ! 

const name = "seunghyeon";

const familyMember = {
    name : 'seunghyeon',
    age : 26,
    hobby : 'reading a book'
};

familyMember.hobby = "listen to music";

console.log(familyMember);