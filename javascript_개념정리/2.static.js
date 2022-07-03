// static 정적 프로퍼티, 메서드
//클래스 레벨에서 메소드를 호출할 수 있음. 공통된 함수 필요할 때 사용


class Fruit{
    static Max_Fruits =4; //속성 앞에 static을 붙일 수 있다. 
    constructor(name, emoji){ //데이터를 받아올 변수
        this.name = name;
        this.emoji = emoji;
    }

    //클래스 레벨의 메서드
    static makeRandomFruit() {
        //클래스 레벨의 메서드에서는 this를 참조할 수 없다. 클래스 자체는 템플릿이기 때문에.
        return new Fruit('banana', '🍌')
    }
    // 인스턴스 레벨의 메서드 
    display = () => {
        console.log(`${this.name}: ${this.emoji}`);
    }
}

// console.log(Fruit.name);  호출 불가
// console.log(Fruit.display); 호출 불가 

const banana = Fruit.makeRandomFruit();
console.log(banana);
console.log(Fruit.Max_Fruits);

const apple = new Fruit('apple', '🍎');
const orange = new Fruit('orange', '🍊');

console.log(apple);
console.log(orange);


//static 예제

Math.pow(); //Math를 이용해 object를 별도로 만들 지 않아도 비슷한 내용의 함수를 유용하게 사용가능
Number.isFinite(1);