//사용예제1
function sum(num1, num2){
    return num1 + num2;
}

//호출한 사람이 없으면 함수는 실행되지 않음

const result = sum(1,2);
console.log(result);

// 사용예제2

let lastName = "Lee";
let firstName = "민형";

function fullName(firstName, lastName){
    return `${firstName} ${lastName}`;
}

console.log(fullName(firstName,lastName));