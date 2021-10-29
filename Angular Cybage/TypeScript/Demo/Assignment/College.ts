import {Student} from "./Student";
import {Teacher} from "./Teacher";

let  studentObj=new Student("Anup",23,85);
let teacherObj=new Teacher("Anupam",25);
let college=[];
college.push(studentObj);
college.push(teacherObj);
college.forEach(print=>{
   console.log(print);
});
