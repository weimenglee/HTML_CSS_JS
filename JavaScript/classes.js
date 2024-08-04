class Person {
    // Constructor to initialize the person's name and age
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Method to get the person's name
    getName() {
        return this.name;
    }

    // Method to set the person's name
    setName(newName) {
        this.name = newName;
    }

    // Method to get the person's age
    getAge() {
        return this.age;
    }

    // Method to set the person's age
    setAge(newAge) {
        this.age = newAge;
    }

    // Method to return a description of the person
    describe() {
        return `${this.name} is ${this.age} years old.`;
    }
}

// Creating an instance of the Person class
const person1 = new Person('Alice', 30);

// Using the methods
console.log(person1.getName());  // Output: Alice
console.log(person1.getAge());   // Output: 30
console.log(person1.describe()); // Output: Alice is 30 years old.

// Updating the person's details
person1.setName('Bob');
person1.setAge(35);

console.log(person1.describe()); // Output: Bob is 35 years old

//=========

class Person {
    // Private fields
    #name;
    #age;

    constructor(name, age) {
        this.#name = name;
        this.#age = age;
    }

    // Public methods
    getName() {
        return this.#name;
    }

    getAge() {
        return this.#age;
    }

    // Private method
    #describe() {
        return `${this.#name} is ${this.#age} years old.`;
    }

    publicDescribe() {
        return this.#describe();
    }
}

const person = new Person('Alice', 30);

console.log(person.getName()); // Output: Alice
console.log(person.getAge());  // Output: 30
console.log(person.publicDescribe()); // Output: Alice is 30 years old.

// The following will throw an error
// console.log(person.#name);       // SyntaxError: Private field '#name' must be declared in an enclosing class
// console.log(person.#describe()); // SyntaxError: Private method '#describe' is not accessible outside class

