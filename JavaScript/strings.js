let singleQuoteString = 'Hello, world!';
let doubleQuoteString = "Hello, world!";
let name = 'Alice';
let age = 25;
let introduction = `My name is ${name} and I am ${age} years old.`;

console.log(introduction); // Output: My name is Alice and I am 25 years old.

let str = 'Hello, world!';
console.log(str.length);             // Output: 13
console.log(str[0]);                 // Output: H
console.log(str.charAt(0));          // Output: H

let text = 'Hello, World!';
console.log(text.toUpperCase());     // Output: HELLO, WORLD!
console.log(text.toLowerCase());     // Output: hello, world!
console.log(text.includes('World')); // Output: true
console.log(text.indexOf('World'));  // Output: 7
console.log(text.substring(0, 5));   // Output: Hello
console.log(text.slice(7, 12));      // Output: World

let padded = '   Hello, world!   ';
console.log(padded.trim());          // Output: Hello, world!

