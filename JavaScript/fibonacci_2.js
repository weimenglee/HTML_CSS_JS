function* fibonacciGenerator(limit) {
    let prev = 1;
    let curr = 1;
    let count = 0;

    while (count < limit) {
        yield prev;
        [prev, curr] = [curr, prev + curr];
        count += 1;
    }    
}

const fibGen = fibonacciGenerator(6);
while (true) {
    const result = fibGen.next()
    if (!result.done) {
        console.log(result); // { value: 1, done: false }
    } else{
       break;
    }    
}