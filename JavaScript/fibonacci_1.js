function* fibonacciGenerator() {
    let prev = 1;
    let curr = 1;

    while (true) {
        yield prev;
        // destructing assignment
        [prev, curr] = [curr, prev + curr];
    }
}

const fibGen = fibonacciGenerator();
for (let i = 0; i < 10; i++) {
    console.log(fibGen.next().value);
}