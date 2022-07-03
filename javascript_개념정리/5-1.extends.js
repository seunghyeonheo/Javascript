// class Rapper {
//     constructor(age, height){
//         this.age = age;
//         this.height = height;
//     }
//     perform(){
//         console.log('we are kpop group!');
//     }
//     rap(){
//         console.log('랩을 맡고 있어요');
//     }
//     }


// class Dancer {
//     constructor(age, height){
//         this.age = age;
//         this.height = height;
//     }
//     perform(){
//         console.log('we are kpop group!');
//     }
//     dance(){
//         console.log('춤을 맡고 있어요');
//     }
// }


class Group{
    constructor(groupName){
        this.groupName = groupName;
    }
    sing(){
        console.log('I can sing');
    } 
    dance(){
        console.log('I can dance');
    }
}

class Rapper extends Group {
    constructor(groupName, agency) {
        super(groupName); //groupName은 Group에 정의되어 있기 때문에 super(부모클래스)를 통해 받아온다. 
        this.agency = agency;
    }
    rap(){
        console.log('I can rap');
    }
    //자식클래스에서 내 행동을 부모의 행동에 덮어 씌우고 싶다면 다르게 쓰면 됨! 
    dance(){
        super.dance(); //부모에 있는 dance함수를 먼저 쓰고 내가 원하는 함수를 구현할 수도 있음 
        console.log('나는 힙하게 춤춰');
    } 
}
const jeno = new Rapper('NctDream', 'sm');
console.log(jeno);
jeno.sing();
jeno.dance();
jeno.rap();

class Visual extends Group {
    bling(){
        console.log("I'm so sexy");
    }
}
const jaemin = new Visual('NctDream');
console.log(jaemin);
jaemin.sing();
jaemin.dance();
jaemin.bling();


