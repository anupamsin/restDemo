"use strict";
exports.__esModule = true;
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(name, age, marks) {
        this.name = name;
        this.age = age;
        this.marks = marks;
        this.name = name;
        this.age = age;
    }
    Person.prototype.getDetails = function () {
        if (typeof this.marks !== 'undefined') {
            console.log("Name : " + this.name + ", Age : " + this.age + ", Number : " + this.marks);
        }
        else {
            console.log("Name : " + this.name + ", Age : " + this.age);
        }
    };
    return Person;
}());
exports.Person = Person;
