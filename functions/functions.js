let message = ''

function user(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

// function имя(параметры, через, запятую) {
//     /* тело, код функции */
// }

function userFactory(firstName, lastName) {
    return new user(firstName, lastName);
}

const john = userFactory('John', 'Doe');

console.log(john)