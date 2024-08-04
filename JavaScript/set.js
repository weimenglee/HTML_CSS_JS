let uniqueNumbers = new Set([1, 2, 3, 4]);
uniqueNumbers.add(5);
uniqueNumbers.delete(2);
console.log(uniqueNumbers.has(1));
let setOutput = 'Set: ' + Array.from(uniqueNumbers).join(', ');