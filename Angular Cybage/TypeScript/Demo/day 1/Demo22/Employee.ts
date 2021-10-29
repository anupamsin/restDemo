// Inheritance and polymorphism

export class Employee{
    name: string;
    age: number;
    salary: number;

    constructor(name: string, age: number, salary: number) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    getDetails(): void {
            console.log("From emoployee class");
            console.log("My name is " + this.name + ". My age is " + this.age + ". I earn " + this.salary);
    }
}


