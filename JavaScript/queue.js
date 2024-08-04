let queue = [];
queue.push('first');
queue.push('second');
queue.push('third');
itemRemoved = queue.shift();
let queueOutput = 'Queue: ' + queue.join(', ');