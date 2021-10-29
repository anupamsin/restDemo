export class Person {

    constructor(private readonly name: string, private readonly age: number,private readonly marks?:number) {
        this.name = name;
        this.age = age;
    }

    getDetails(): void {
        if (typeof this.marks !== 'undefined') {
            console.log("Name : " + this.name + ", Age : " + this.age+", Number : "+this.marks);
        }
        else{
            console.log("Name : " + this.name + ", Age : " + this.age);
        }
    }
}
