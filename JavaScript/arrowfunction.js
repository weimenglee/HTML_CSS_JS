const add = (a, b) => {
    return a + b;
};
console.log(add(5, 3)); // Output: 8
const calculate = (a, b) => {
    const sum = a + b;
    const product = a * b;
    return `Sum: ${sum}, Product: ${product}`;
};

console.log(calculate(4, 5)); // Output: Sum: 9, Product: 20