const app = document.querySelector('#app')
const loader = document.querySelector('#loading');

const promise = new Promise((resolve, reject) => {
    resolve('Все гуд')
    setTimeout(() => reject(new Error("Whoops!")), 1000);
}).catch((e) => {
    console.error(e)
}).then((res) => {
    console.info(res)
})

console.log(promise)

fetch('https://jsonplaceholder.typicode.com/users')
    .catch((error) => {
        loader.innerText = 'Произошла ошибка при попытке получить данные'
    })
    .then((response) => response.json())
    .then((users) => {
        loader.innerText = "Данные подгружаются..."

        for (user of users) {
            const h1 = document.createElement('h1')
            h1.innerText = user.name
            app.appendChild(h1);
        }

        setTimeout(() => {
            loader.innerText = null;
        }, 1500)

        return users;
    })
    .finally(() => {
        loader.innerText = null;
    });
