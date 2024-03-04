// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps
//values unique hoti hai, duplicate value like 'India' print nahi hogi
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);
 //for of loop cannot iterate the object
 //map is not iterable
for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

//for-of loop doesn't work on object because objects are not iterable
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }

//practice

// const practice = ["Faiz", "Ahmed", "Syed"];
// for(const num of practice){
//     console.log(num);
// }

// const newVar = 'SyedFaizAhmed';
// for (const newV of newVar){
//     console.log(newV)
// }

// const map = new Map();
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const [key, value] of map){
//     console.log(key, value)
// }