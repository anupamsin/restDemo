function multiply(a, b, c) {
    if (typeof c !== 'undefined') {
        return a * b * c;
    }
    return a * b;
}
console.log(multiply(1, 2, 3));
