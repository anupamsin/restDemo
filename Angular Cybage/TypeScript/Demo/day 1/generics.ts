function fun<T>(args:T):T {
    return args;
}

let result = fun<string>("Hello World");
let result2 = fun<number>(200);
let result3 = fun<boolean>(true);

console.log(result);
console.log(result2);
console.log(result3);