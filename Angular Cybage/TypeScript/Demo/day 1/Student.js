var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    // private name: string;
    // private age: number;
    // private marks: number;
    function Person(name, age, marks) {
        this.name = name;
        this.age = age;
        this.marks = marks;
        this.name = name;
        this.age = age;
        this.marks = marks;
    }
    Person.prototype.getDetails = function () {
        console.log("My name is " + this.name + ". My age is " + this.age + ". I secured " + this.marks + " marks.");
    };
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Student.prototype.getDetails = function () {
    };
    return Student;
}(Person));
var studentObject1 = new Student("Anupam", 25, 80);
var studentObject2 = new Student("Anup", 23, 75);
var stud = [];
stud.push(studentObject1);
stud.push(studentObject2);
stud.forEach(function (element) {
    console.log(element);
});
