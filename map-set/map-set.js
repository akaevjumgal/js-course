// Map
const store = new Map();

function deleteObject() {
    return null;
}

const uniqueSymbol = Symbol('buffet')

store.set('hasAccess', true);
store.set('name', 'User');
store.set(deleteObject, 'Vova');
store.set(uniqueSymbol, 'Unique Symbol')

store['age'] = 21;

store.delete('hasAccess')

// console.log(store.get('hasAccess'))
// console.log(store.get(uniqueSymbol2))

// Set
const uniqueStore = new Set();

uniqueStore.add('name', 'Leonid')
uniqueStore.add('name', 'Leonid')

const array = [1, 2, 3, 1, 3, 4, 5, 5, 5, 6, 8]
const strings = ['Vova', 'Vova', 'Andrei', 'Oleg']

class Class {
    id = 1;

    constructor(id) {
        this.id = id;
    }
}

const objArray = [
    new Class(1),
    new Class(1),
    new Class(1),
]

const uniqueNames = new Set(strings)

uniqueStore.forEach(console.log)