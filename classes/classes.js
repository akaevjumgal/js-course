function generateId() {
    const randLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    const uniqid = randLetter + Date.now();

    return uniqid
}

window.addEventListener('DOMContentLoaded', () => {
    const app = document.querySelector('#app');

    // Class - Корзина покупок
    class Basket {
        constructor(goodName, hasDiscount = false, price = 0) {
            this.id = generateId();
            this.goodName = goodName;
            this.hasDiscount = hasDiscount;
            this.price = price
        }
    }
    
    // Генерация DOM объектов
    const headerItems = ['ID', 'Название Товара', 'Цена']
    const basketList = [];
    const basket = new Basket('sneakers', true, 350);
    basketList.push(basket)
    basketList.push(new Basket('Lamp', false, 600))

    // Генерация Таблицы
    const table = document.createElement('table');
    const thead = document.createElement('thead')
    const tbody = document.createElement('tbody')
    const tr = document.createElement('tr');

    thead.appendChild(tr);
    table.appendChild(thead);

    headerItems.forEach((name) => {
        const td = document.createElement('td');
        td.innerText = name;

        tr.appendChild(td);
    })

    basketList.forEach((basketItem) => {
        const basketContainer = document.createElement('tr')

        const td1 = document.createElement('td');
        td1.innerText = basketItem.id

        const td2 = document.createElement('td')
        td2.innerText = basketItem.goodName;

        const td3 = document.createElement('td');
        td3.innerText = basketItem.price;

        basketContainer.appendChild(td1)
        basketContainer.appendChild(td2)
        basketContainer.appendChild(td3)
        tbody.appendChild(basketContainer)
    })
    table.appendChild(tbody)

    app.appendChild(table);
});