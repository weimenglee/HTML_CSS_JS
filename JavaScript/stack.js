let stack = [];
stack.push('item 1');
stack.push('item 2');
stack.push('item 3');
itemRemoved = stack.pop();
let stackOutput = 'Stack: ' + stack.join(', ');
console.log(stackOutput)
console.log(itemRemoved);