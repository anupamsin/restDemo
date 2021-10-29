"use strict";
exports.__esModule = true;
var Student_1 = require("./Student");
var Teacher_1 = require("./Teacher");
var studentObj = new Student_1.Student("Anup", 23, 85);
var teacherObj = new Teacher_1.Teacher("Anupam", 25);
var college = [];
college.push(studentObj);
college.push(teacherObj);
college.forEach(function (print) {
    console.log(print);
});
