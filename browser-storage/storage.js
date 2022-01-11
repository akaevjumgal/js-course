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

Cookies.set('user', JSON.stringify(userCredentials))

console.log(Cookies.get('user'))
console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)))
console.log(JSON.parse(sessionStorage.getItem(STORAGE_KEY)))


