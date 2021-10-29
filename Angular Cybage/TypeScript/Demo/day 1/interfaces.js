var Emp = /** @class */ (function () {
    function Emp() {
    }
    Emp.prototype.getDetails = function () {
        console.log("Inside Employee");
    };
    return Emp;
}());
var empl = new Emp();
empl.getDetails();
var objects = {
    name: "Anupam",
    age: 25,
    salary: 24000,
    getFull: function () { return "test"; }
};
console.log(objects.getFull());
