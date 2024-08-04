for (let i = 0; i < 5; i++) {
    console.log(i); // Output: 0 1 2 3 4
}

//=============

let i = 0;
while (i < 5) {
    console.log(i); // Output: 0 1 2 3 4
    i++;
}

//=============

let i = 0;
do {
    console.log(i); // Output: 0 1 2 3 4
    i++;
} while (i < 5);

//=============

const array = [10, 20, 30, 40, 50];
for (const value of array) {
    console.log(value);
}

//=============

const person = {
    name: 'Alice',
    age: 25,
    city: 'Wonderland'
};

for (const key in person) {
    console.log(`${key}: ${person[key]}`);
    // Output: name: Alice, age: 25, city: Wonderland
}

