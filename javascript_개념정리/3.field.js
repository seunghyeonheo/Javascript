//접근제어자 - 캡슐화
//#field는 외부에서 접근이 불가능함. 


class Fruit{
    #name; //name과 emoji는 외부로부터 전달받은 데이터로 사용. name과 emoji를 field라고 함. 
    #emoji; //name 외부에서 변경이 되지 않게 하고 싶다! -> 접근제어자를 사용해 캡슐화하기(꽁꽁 숨겨놓기). #사용
    #type= '과일';
    constructor(name, emoji){ 
        this.#name = name; //#을 사용해 캡슐화 
        this.#emoji = emoji;
    }
    display = () => {
        console.log(`${this.name}: ${this.emoji}`);
    }
};


const apple = new Fruit('apple', '🍎');
// #field는 외부에서 접근이 불가능함.

console.log(apple);
