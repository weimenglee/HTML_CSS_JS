let number = 10;

if (number > 0) {
    console.log('The number is positive.');
} else if (number < 0) {
    console.log('The number is negative.');
} else {
    console.log('The number is zero.');
}

//=================

let fruit = 'apple';

switch (fruit) {
    case 'apple':
        console.log('Apples are $2 a pound.');
        break;
    case 'banana':
        console.log('Bananas are $1 a pound.');
        break;
    case 'cherry':
        console.log('Cherries are $3 a pound.');
        break;
    default:
        console.log('Sorry, we are out of ' + fruit + '.');
}

//=================

let age = 18;
let canVote = (age >= 18) ? 'Yes, you can vote.' : 'No, you cannot vote.';
console.log(canVote); // Output: Yes, you can vote.