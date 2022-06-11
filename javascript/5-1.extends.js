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


