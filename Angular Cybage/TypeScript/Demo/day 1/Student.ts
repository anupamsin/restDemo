class Person {
    // private name: string;
    // private age: number;
    // private marks: number;

    constructor(private name: string, private age: number, private marks: number) {
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
    }
}

var studentObject1 = new Student("Anupam", 25, 80);
var studentObject2 = new Student("Anup", 23, 75);
var stud = [];
stud.push(studentObject1);
stud.push(studentObject2);
stud.forEach(element => {
    console.log(element);
});