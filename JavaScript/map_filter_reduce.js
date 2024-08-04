const numbers = [1, 2, 3, 4, 5];
const squared = numbers.map(num => num * num);
console.log(squared); // Output: [1, 4, 9, 16, 25]

const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum); // Output: 15