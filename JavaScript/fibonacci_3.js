class FibonacciIterator {
    constructor() {
        this.prev = 0;
        this.curr = 1;
    }

    [Symbol.iterator]() {
        const self = this;
        return {
            next() {
                // Generate the next Fibonacci number
                const value = self.prev;
                const newCurr = self.prev + self.curr;
                self.prev = self.curr;
                self.curr = newCurr;

                return { value, done: false };
            }
        };
    }
}

const fibIterator = new FibonacciIterator();
const fibSequence = [];

for (let i = 0; i < 10; i++) {
    fibSequence.push(fibIterator[Symbol.iterator]().next().value);
}

console.log(fibSequence); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]