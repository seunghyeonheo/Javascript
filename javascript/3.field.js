//접근제어자 - 캡슐화
//#field는 외부에서 접근이 불가능함. 


class Fruit{
    name;
    emoji;
    type= '과일';
    constructor(name, emoji){ 
        this.#name = name;
        this.#emoji = emoji;
    }
    display = () => {
        console.log(`${this.name}: ${this.emoji}`);
    }
};


const apple = new Fruit('apple', '🍎');

console.log(apple);
