const obj = {
    name: 'emily',
    age : 20,
};

//코딩하는 시점에 정적으로 접근이 확정됨
obj.name;
obj.age;

// 동적으로 속성에 접근
function getValue(obj, key) {
    return obj[key];
}

console.log(getValue(obj, 'name'));

function addkey(obj, key, value) {
    obj[key] = value;
}

addkey(add, 'job', 'engineer');
console.log(obj);

function addkey(obj, key, value) {
    obj[key] = value;
}

function deletekey(obj, key, value) {
    delete obj[key];
}