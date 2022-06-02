//null, undefined
//null은 비어있는 상태, undefined는 정해지지 않은 상태

let variable;
console.log(variable);

let boyGroup;
console.log(boyGroup); //보이그룹이 정해지지 않은 상태

boyGroup = null;
console.log(boyGroup); //보이그룹은 존재하지만 누구인지 알 수 없는 상태

let boyGroupName = "NCT Dream";
console.log(boyGroupName);

console.log(typeof "승현");
console.log(typeof 323);
console.log(typeof null);
//typeof null = object인 것은 초기 자바스크립트의 mistake! 
//null은 원시형 타입이 맞음
console.log(typeof undefined);

