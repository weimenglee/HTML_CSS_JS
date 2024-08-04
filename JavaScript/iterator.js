const array = [1, 2, 3, 4, 5];
const iterator = array[Symbol.iterator]();
while (true) {
    const result = iterator.next()
    if (!result.done) {
        console.log(result); // { value: 1, done: false }
    } else{
       break;
    }    
}