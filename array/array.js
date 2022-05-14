const array = new Array();
const array2 = [1,2];
const fruits = ['사과','바나나'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length -1]);

for(let i = 0; i< fruits.length; i++){
    console.log(fruits[i]);
}

for(let fruit of fruits){
    console.log(fruit);
}

fruits.forEach((fruit) => console.log(fruit));

console.clear();

fruits.push('딸기','복숭아');
const poped = fruits.pop();

console.log(poped);
fruits.pop();


fruits.unshift('딸기','레몬');


fruits.shift();
fruits.shift();


fruits.push('딸기','복숭아','레몬');
fruits.splice(1,1,'배','수박'); //인덱스에서 한개 찾아서 지움

const fruits2 =['메론','배'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

console.clear();
console.log(fruits);
console.log(fruits.indexOf('사과'));
console.log(fruits.indexOf('수박'));
console.log(fruits.indexOf('코코넛'));

console.log(fruits.includes('수박'));
console.log(fruits.includes('코코넛'));

console.clear();

fruits.push('사과');
console.log(fruits);
console.log(fruits.indexOf('사과'));
console.log(fruits.lastIndexOf('사과'));
console.log(fruits.lastIndexOf('코코넛'));

const array = new Array(12,20);
console.log(array[0]);
console.log(array[1]);
const array = new Array(12);
array[0] : undefined
