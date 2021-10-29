import {Employee} from "./Employee";

class Manager extends Employee {

    getDetails(): void {
        console.log("Inside manager class");
    }

    getDetailsEmployee():void{
        super.getDetails()
    }

}

const managerObject = new Manager("Anupam", 25, 14000);
managerObject.getDetails();
managerObject.getDetailsEmployee();