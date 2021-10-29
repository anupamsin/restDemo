"use strict";
// Inheritance and polymorphism
exports.__esModule = true;
exports.Employee = void 0;
var Employee = /** @class */ (function () {
    function Employee(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
    Employee.prototype.getDetails = function () {
        console.log("From emoployee class");
        console.log("My name is " + this.name + ". My age is " + this.age + ". I earn " + this.salary);
    };
    return Employee;
}());
exports.Employee = Employee;
