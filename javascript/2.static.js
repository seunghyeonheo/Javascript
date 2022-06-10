// static 정적 프로퍼티, 메서드

class Fruit{
    static Max_Fruits =4; //클래스레벨에서 지정
    constructor(name, emoji){ //데이터를 받아올 변수
        this.name = name;
        this.emoji = emoji;
    }

    //클래스 레벨의 메서드
    static makeRandomFruit() {
        //클래스 레벨의 메서드에서는 this를 참조할 수 없다. 
        return new Fruit('banana', '🍌')
    }
    // 인스턴스 레벨의 메서드 
    display = () => {
        console.log(`${this.name}: ${this.emoji}`);
    }
}

const banana = new Fruit.makeRandomFruit();
console.log(banana);
console.log(Fruit.Max_Fruits);

const apple = new Fruit('apple', '🍎');
const orange = new Fruit('orange', '🍊');

console.log(apple);
console.log(orange);


//static 예제

Math.pow();
Number.isFinite(1);