var Hello = /** @class */ (function () {
    function Hello() {
    }
    Hello.prototype.hi = function () {
        console.log("Hello from the Class");
    };
    return Hello;
}());
var obj = new Hello();
obj.hi();
