
class User {
    constructor(name, age, isAdmin = false) {
        this.name = name;
        this.age = age;
        this.isAdmin = isAdmin;
    }
}

const userList = [
    new User('Claudia', 31, false),
    new User('John', 24, true),
    new User('Victor', 36, false),
    new User('Vasya', 40, false)
]

// // Отобразить админов
// console.log(userList.filter((user) => user.isAdmin))

// // Отфильтровать по возрасту
// console.log(userList.filter((user) => user.age > 25))

// // Поиск по критерию
// console.log(userList.find((user) => user.name === 'Victor'))

// // Проверка по предикату (возвращает первый найденный объект)
// console.log(
//     'Содержит пользователя с именем Victor',
//     userList.some((user) => user.name === 'Vitor')
// )
// // Проверка на совпадение каждого элемента
// console.log(userList.every((user) => user.name === 'Vitor'))

// // Маппинг списка
// console.log(userList.map((user) => user.name))

// // Сортировка по критерию
// console.log(userList.slice().sort((a, b) => b.age - a.age));

// // Выделить элементы с 2 по 3
// console.log(userList.slice(1, 3));

// Получить элементы с 2 по 4
// console.log(userList.splice(1, 3));

// Внесение данных в список
// console.log(userList.push(new User('Vova', 50, true)));

// Удаление элементы с конца списка
// console.log(userList.pop());

// Замена данными в указанном промежутке
console.log(userList.fill(new User('Petya', 18, false), 2, 3))


