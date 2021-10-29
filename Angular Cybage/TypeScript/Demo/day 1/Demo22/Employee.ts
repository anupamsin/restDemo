// Inheritance and polymorphism

class Employee{
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



class Manager extends Employee {
   
    getDetails(): void {
        console.log("Inside manager class");
    }

    getDetailsEmployee():void{        
        super.getDetails()
    }
    
}

var managerObject = new Manager("Anupam", 25, 14000);
managerObject.getDetails();
managerObject.getDetailsEmployee();
