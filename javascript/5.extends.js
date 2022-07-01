// class Tiger {
//     constructor(color) {
//         this.color = color;
//     }
//     eat(){
//         console.log('먹자');
//     }
//     sleep(){
//         console.log('잔다');
//     }
// }

// class Dog {
//     constructor(color) {
//         this.color = color;
//     }
//     eat(){
//         console.log('먹자');
//     }
//     sleep(){
//         console.log('잔다');
//     }
//     play(){
//         console.log('놀자~');
//     }
// }



class Animal {
    
        constructor(color) {
            this.color = color;
        }
        eat(){
            console.log('먹자!');
        }
        sleep(){
            console.log('잔다');
        }
    }

    class Tiger extends Animal {}
    const tiger = new Tiger('노랑이');
    console.log(tiger);
    tiger.sleep();
    tiger.eat();

    class Dog extends Animal{
        constructor(color,ownerName) {
            super(color); //super는 부모를 가리킴.
            this.ownerName = ownerName;
        }
        play() {
            console.log('놀자아~');
        }
        bark(){
            console.log('짖는다!');
        }
        //오버라이딩 
        eat(){
            super.eat();
            console.log('강아지가 먹는다!');
        }
    }

    const dog = new Dog('빨강이','주인');
    console.log(dog);
    dog.bark;
    dog.eat;
    dog.play;