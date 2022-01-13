
// Премитивы: String, Number, Boolean, Object, Array

// Number
// console.log(Number('123')) // конвертация в число
// console.log(Number(456.89213).toFixed(2)) // урезаем количество значений после .
// console.log(parseInt('12343'))
// console.log(parseFloat('12343.123')) // конвертация чисел с плавающей запятой
// console.log(Number('12343.123').toLocaleString()) // форматирование в зависимости от локали

// Boolean
const a = 1;
// console.log(Boolean(a));

const array = [null, 1, 3, 'Booyah', undefined, '', 0];
// Убрать все false значения
// console.log(array.filter(Boolean));

// String
const num = 15;
// console.log(String(12312)) // конвертация в строку
// console.log(num.toString()) // еще один способ конвертации
// console.log(String('   My  text  ').trim()) // убрать пробемы с концов

// Object
const pets = {
    cats: {
        name: 'Neko'
    },
    dogs: {
        name: 'Pochi'
    }
}

// console.log(Object.keys(pets)) // перебираем ключи
// console.log(Object.values(pets)) // перебираем значения
// Object.entries(pets).map(([key, value]) => {
//     console.log('Key: ', key)
//     console.log('Value: ', value)
// }) // перебираем ключ + значение

// // копирование новым синтаксисом
// const copiedPetsNew = {...pets}
// // копирование старым синтаксисом
// const copiedPetsOld = Object.create(pets)
// console.log(copiedPetsNew)
// console.log(copiedPetsOld)

//Array

// console.log(Array.isArray(NaN)) // должно вывести false
// console.log(Array.isArray([])) // должно вывести true
const users = [
    {
        user: {
            name: 'Test 1'
        },
    },
    {
        user: {
            name: 'Test 2'
        },
    },
    {
        user: {
            name: 'Test 3'
        },
    }
]
const copiedArray = Array.from(users) // копирование массива
const copiedArrayWithMapping = Array.from(users, (item) => item.user.name) // копирование массива с маппингом

// console.log(copiedArray)

// Date
const timestamp = new Date().toLocaleDateString('ru-RU') // форматирование даты по локали
// console.log(Date.UTC(2022, 1))

// Math
const NUMBERS = [112, 34, 34, 99999, -12, 2, 5]

const maxNumber = Math.max(...NUMBERS)
const minNumber = Math.min(...NUMBERS)

// console.log(minNumber)
// console.log(maxNumber)

function getRandomArbitrary(min, max) {
    return parseInt(Math.random() * (max - min) + min);
} // генерация случайного числа в указанном промежутке
console.log(getRandomArbitrary(1, 80))
