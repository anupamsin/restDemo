class Person {
    // private name: string;
    // private age: number;
    // private marks: number;

    constructor(private readonly name: string, private readonly age: number, private readonly marks: number) {
        this.name = name;
        this.age = age;
        this.marks = marks;
    }

    getDetails(): void {
        console.log("My name is " + this.name + ". My age is " + this.age + ". I secured " + this.marks + " marks.");
    }
}

class Student extends Person {

    getDetails(): void {
        console.log("Inside Student");
    }
}

const studentObject1 = new Student("Anupam", 25, 80);
const studentObject2 = new Student("Anup", 23, 75);
studentObject2.getDetails();
const stud = [];
stud.push(studentObject1);
stud.push(studentObject2);
stud.forEach(element => {
    console.log(element);
});