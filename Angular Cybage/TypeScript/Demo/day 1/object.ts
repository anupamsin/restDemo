function ObjectDemo(person:{firstName:string,lastName:string}){
    console.log(`${person.firstName} ${person.lastName}`);
}

let p={
    firstName:"Anupam",
    lastName:"Singh"
}

ObjectDemo(p);