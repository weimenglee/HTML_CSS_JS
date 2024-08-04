function exampleConst() {
    const c = 30;
    console.log(c); // Output: 30
    // c = 40; // Error: Assignment to constant variable

    const obj = { key: 'value' };
    obj.key = 'new value';       // Allowed
    console.log(obj.key);        // Output: new value
    obj = { key2: 'value2' };    // Not allowed
}

exampleConst();