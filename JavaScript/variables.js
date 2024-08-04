function exampleLet() {
    if (true) {
        let b = 20;
        console.log(b); // Output: 20
    }
    // console.log(b);  // Error: b is not defined (block scope)
}

exampleLet();