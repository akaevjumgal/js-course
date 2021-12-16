
const user = {
    name: 'John',
}

function greeting() {
    return `Hi my name is ${this.name}`;
}

const array = ['a', 'b', 'c'];

const object = {...user};
const copiedArray = array.map((p) => p = 'd');

console.log(array);
console.log(copiedArray)