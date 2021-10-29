"use strict";
exports.__esModule = true;
//default params
var Student_1 = require("../Assignment/Student");
var Teacher_1 = require("../Assignment/Teacher");
function addUsingDefault(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    return num1 + num2;
}
console.log("Add using default" + addUsingDefault(5));
//optional
function addNumsOptional(num1, num2, num3) {
    if (num3 !== undefined) {
        return num1 + num2 + num3;
    }
    return num1 + num2;
}
console.log("Add using optional " + addNumsOptional(5, 7));
console.log("Add using optional " + addNumsOptional(5, 7, 3));
//rest param
function addAllNums() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var i;
    var sum = 0;
    for (i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
    }
    return sum;
}
console.log("Sum using rest: " + addAllNums(2, 3, 4));
console.log("Sum using rest : " + addAllNums(2, 3, 4, 6, 8));
var sumUsingLambda = function () {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var i;
    var sum = 0;
    for (i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
    }
    return sum;
};
console.log("Sum using rest Lambda : " + sumUsingLambda(2, 3, 4));
console.log("Sum using rest Lambda : " + sumUsingLambda(2, 3, 4, 6, 8));
//using object
function objectTest(stud, teach) {
    stud.getDetails();
    teach.getDetails();
}
var stud = new Student_1.Student("Anupam", 25, 60);
var teach = new Teacher_1.Teacher("Anushka", 35);
objectTest(stud, teach);
