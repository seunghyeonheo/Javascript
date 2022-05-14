//join : a string 

const fruits = ['apple', 'banana', 'orange'];
const result = fruits.join(',');
console.log(result);



    //reverse
    const a = [1,2,3,4,5];
    a.reverse();
    console.log(a);

    //splice, slice
    const re2 = a.splice(0,2);
    console.log(re2);
    console.log(a);

 
    //find
    class student {
        constructor(name, age, enrolled, score){
            this.name = name;
            this.age = age;
            this.enrolled = enrolled;
            this.score = score;
        }
    }


    const students = [
        new student('A', 29, true, 45),
        new student('B', 19, false, 80),
        new student('C', 30, true, 90),
        new student('D', 22, false, 67),
        new student('E', 24, true, 88),
    ];

    const re3 = students.find((student) => student.score === 90);
    console.log(re3);
    {
    //filter
    const result = students.filter((student) => student.enrolled);
    console.log(result);
    }

    {
        const result = students.map((student) => student.score *2);
        console.log(result);
    }

    {
        const result = students.some((student)=>student.score < 50);
        console.log(result);
    }
    {
        const result2 = !students.every((student) => student.score >= 50);
        console.log(result2);
    }

    //reduce
{
    const result = students.reduce((prev,curr) => {
        console.log('------------')
        console.log(prev);
        console.log(curr);
        return prev + curr.score;
    },0);


console.log(result/students.length);
}

{
    const result = students
    .map((student) => student.score)
    .filter((score)=> score >= 50)
    .join();
    console.log(result);
}