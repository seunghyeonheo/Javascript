// 객체를 손쉽게 만들 수 있는 템플릿
// 1. 생성자 함수 (오래된 고전적인 방법)
// 2. 클래스 

// 생성자함수를 클래스로 바꿀 것임 

class Fruit {
    // 생성자 : new 키워드로 객체를 생성할 때 호출되는 함수
    constructor(name, emoji) {
        // fruit이라는 객체를 만드는 데 필요한 데이터를 받아오기 위해 생성자를 만든다. 
        this.name = name;
        this.emoji = emoji;
        //key, value
    }
   // 일반적으로 생성자 밖에 함수를 정의함. function 키워드를 붙이면 오류 발생함(!)
    
   display = () => {
       console.log(`${this.name}: ${this.emoji}`);
   };
    };
    

    
    //apple이라는 객체는 Fruit 클래스의 인스턴스이다. 
    const apple = new Fruit('apple', '🍎');
    //orange라는 객체는 Fruit 클래스의 인스턴스이다. = Fruit 클래스로 orange 인스턴스가 만들어짐. 
    const orange = new Fruit('ornage', '🍊');

    //obj는 객체이고, 그 어떤 클래스의 인스턴스도 아니다. 
    const obj = {name: 'ellie'};

    