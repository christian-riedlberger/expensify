console.log('destructuring');

//Object Destructuring

// const person = {
//     name: 'Chris',
//     age: 25,
//     location: {
//         city: "Montreal",
//         temp: 25
//     }
// };

// const {name: firstName = 'Anonymous', age } = person;

// console.log(`${firstName} is ${age}`);

// const {city, temp: temperature} = person.location
// if (city && temperature) {
//     console.log(`Its ${temperature} in ${city}`);
// }    

// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const { name: publisherName = 'Self-Published' } = book.publisher;
// console.log(publisherName);


//Array Destructuring

const address = ['1299 South Juniper St', 'Montreal', , 'H9B1Y4'];

const [street, city, province = 'ON', postalCode] = address;

console.log(`You are in ${city} ${province}.`);


const item  = ['coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [coffee, small, medium, large] = item;

console.log(`A ${coffee} costs ${medium}`)


