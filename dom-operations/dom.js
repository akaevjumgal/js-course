const form = document.querySelector('form')

class UserLogin {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const usernameValue = event.target.querySelector('#username').value;
    const passwordValue = event.target.querySelector('#password').value;
    
    const userData = {
        username: usernameValue,
        password: passwordValue,
    }
    
    console.log(userData)
})