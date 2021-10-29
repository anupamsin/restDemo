//default params
import {Student} from "../Assignment/Student";
import {Teacher} from "../Assignment/Teacher";

function addUsingDefault(num1:number, num2:number=10):number {
    return num1+num2;
}
console.log("Add using default"+addUsingDefault(5));

//optional
function addNumsOptional(num1:number,num2:number,num3?:number):number{
    if(num3 !== undefined){
        return num1+num2+num3;
    }
    return num1+num2;
}

console.log("Add using optional "+addNumsOptional(5,7));
console.log("Add using optional "+addNumsOptional(5,7,3));


//rest param
function addAllNums(...nums:number[]):number {
    let i;
    let sum:number = 0;
    for(i = 0;i<nums.length;i++) {
        sum = sum + nums[i];
    }
   return sum;
}

console.log("Sum using rest: "+addAllNums(2,3,4));
console.log("Sum using rest : "+addAllNums(2,3,4,6,8));

const sumUsingLambda=(...nums:number[])=>{
    let i;
    let sum:number = 0;
    for(i = 0;i<nums.length;i++) {
        sum = sum + nums[i];
    }
    return sum;
};
console.log("Sum using rest Lambda : "+sumUsingLambda(2,3,4));
console.log("Sum using rest Lambda : "+sumUsingLambda(2,3,4,6,8));

//using object

function objectTest(stud:Student,teach:Teacher) {
    stud.getDetails();
    teach.getDetails();
}
let stud=new Student("Anupam",25,60);
let teach=new Teacher("Anushka",35);
objectTest(stud,teach);