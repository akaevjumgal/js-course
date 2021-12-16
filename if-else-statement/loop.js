// loop for
// for (let step = 10; step >= 0; step--) {
//     console.log('Step' + step);
//     if (step === 12) {
//         break;
//     }
// }

// loop do while
// let i = 0;
// do {
//     i--;
//     console.log('Step' + i);
// } while (i < 5);

// let i = 0;
// // loop while
// while (i < 5) {
//     i += 1;
//     console.log('Step' + i);
// }

// const users = {
//     name: 'Michael',
//     age: 34,
//     screen: ''
// };

// console.log(Object.entries(users))
// for (let [key, value] of Object.entries(users)) {
//     console.log(key + value); 
// }

// const markLoop = false;

// markLoop:
// for (let step in users) {
//     console.log(step);
// }

let count = 0;
const answer1 = prompt('Who is a good boy?')

if (answer1 === 'me') {
    alert('Right!')
    count++;
} else {
    alert('Wrong!')
}

const answer2 = prompt('Who lives in a pineapple under the sea?')

if (answer2 === 'Sponge Bob') {
    alert('Right!')
    count++;
} else {
    alert('Wrong!')
}

console.log('Total', count)