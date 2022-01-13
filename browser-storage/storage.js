// Загрузка файлов
const upload = document.querySelector('#upload')

upload.addEventListener('change', (event) => {
    const blob = new Blob(event.target.files)
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: blob,
        headers: {
            'Content-Type': 'application/octet-stream'
        }
    })
})

const STORAGE_KEY = 'accessToken';

const userCredentials = {
    name: 'Admin',
    password: 'Admin'
}

if (!localStorage.length) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(userCredentials))
}

if (!sessionStorage.length) {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(userCredentials))
}

Cookies.set('user', JSON.stringify(userCredentials), {
    expires: 7,
    domain: 'http://127.0.0.1:5500/',
})

// Основные HTTP методы: GET, POST, PUT, PATCH, DELETE

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        userId: 1,
        title: 'Wow new post!',
        body: 'Description of new post!'
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'GET',
})

console.log(Cookies.get('user'))
console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)))
console.log(JSON.parse(sessionStorage.getItem(STORAGE_KEY)))


