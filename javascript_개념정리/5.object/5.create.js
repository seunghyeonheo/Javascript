// const apple = {
//     name: 'apple',
//     display : function() {
//         console.log(`${this.name}: 🍎`);
//     },
// };

// const orange = {
//     name: 'orange',
//     display : function() {
//         console.log(`${this.name}: 🍊`);
//     },
// };

//생성자 함수 

function Fruit(name, emoji){
    this.name,
    this.emoji,
    this.display = () => {
        console.log(`&{this.name}: ${this.emoji}`);
    };
    // return this; // 생략가능
    }

    const apple = new Fruit('apple', '🍎');
    const orange = new Fruit('ornage', '🍊');