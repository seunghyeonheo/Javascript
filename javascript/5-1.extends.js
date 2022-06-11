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
    rap(){
        console.log('I can rap');
    }
}
const jeno = new Rapper('NctDream');
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


