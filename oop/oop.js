class Person {
    static name;
    static isAdmin;

    constructor(name, isAdmin = false) {
        Person.name = name;
        Person.isAdmin = isAdmin;
    }

    static set setName(name) {   
        Person.name = name;
    }

    static get displayName() {
        return `Hi my name is ${Person.name}`;
    }
}

// class Student extends Person {
//     name = 'guest';
//     #isAdmin = true;

//     constructor() {
//         super();
//     }

//     get displayName() {
//         return `Hi I'm student, ${this.name}`
//     }
// }

// const john = new Person('John', true);
// john.setName = 'John'

Person.setName = 'John';
console.log(Person.displayName)

// const igor = new Student('Igor');
// igor.setName = 'Igor'
// console.log(igor)