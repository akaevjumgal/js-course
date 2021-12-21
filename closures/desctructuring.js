
// const scores = [2, 3, 5, 12, 345, 3]

// const [_, _, ...scoresAfter2] = scores

// console.log(firstValue, secondValue, scoresAfter2);

const user = { 
    names: {
        firstName: 'John', 
        lastName: 'Pietro', 
        middleName: 'Peterson' 
    }
}

const { names: { firstName, lastName, middleName } } = user

console.log(surName, initialName);

function splitNames({ [key]: firstName }) {
    if (!names) {
        return null;
    }

    const [
        firstName = 'Mark',
        lastName = 'None'
    ] = names.split(' ');    

    return { firstName, lastName }
}

function submit() {
    const nameRef = document.getElementById('name')
    console.log(splitNames(nameRef.value))
}

