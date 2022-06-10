// 접근자 프로퍼티 (Accessor Property)

class Student{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName(){
        return `${this.lastName} ${this.firstName}`; 
    }
    set fullName(value){
        console.log('set', value);
    }
}
//속성의 한 부분이라고 간주되는 부분을 함수로 만들지 않고 get 프로퍼티를 붙여주면 
//함수를 호출하지 않고 속성에 접근하듯이 만들 수 있다. ! 

//set은 할당할 때 호출이 되고 값을 받아올 수 있다
//접근-get 할당-set
//get과 set: 행위는 아니지만, 무언가를 조합해서 만들거나 get이나 set을 할 때 
//특정한 일을 해주고 싶다면 접근자 프로퍼티 사용



const student = new Student('마크', 'lee');
console.log(student.firstName);
console.log(student.fullName);
student.fullName = '마크리';