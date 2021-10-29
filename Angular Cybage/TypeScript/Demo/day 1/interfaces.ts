interface MyInterface{
    name: string;
    age: number;
    marks: number;    

    getDetails(): void;
}

class Emp implements MyInterface{
    name: string;
    age: number;
    marks: number; 
    getDetails():void{
        console.log("Inside Employee");
    }
}

var empl=new Emp();
empl.getDetails();
var objects={
    name:"Anupam",
    age:25,
    salary:24000,
    getFull:()=>"test"
}

console.log(objects.getFull());
