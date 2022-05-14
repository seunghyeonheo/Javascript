class person{

    constructor(name, age){
    //fields
        this.name = name;
        this.age = age;
    }

    //methods
    speak(){
        console.log(`${this.name}:hello!`);        
    }
}

const hong = new person('hong',20);
console.log(hong.name)
console.log(hong.age);
hong.speak();