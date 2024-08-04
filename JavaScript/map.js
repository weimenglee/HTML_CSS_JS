let map = new Map();
map.set('name', 'Bob');
map.set('age', 25);

console.log(map.keys()); // returns an Iterator
for (let key of map.keys()) {
    console.log(key, map.get(key));
}
map.delete('age');

let people = new Map();
people.set(1, 'Obama');
people.set(2, 'Biden');