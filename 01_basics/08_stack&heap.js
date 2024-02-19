//stack & heap concept

//stack (primitive) - provide the copy 
//heap (non-primitive) - provide the reference of the original

//play with stack
let myChannel = 'faizahmeddotcom';
let anotherChannel = myChannel;

anotherChannel='SyedFaiz';

console.log(myChannel);
console.log(anotherChannel);

//output
// faizahmeddotcom
// SyedFaiz

//play with heap
let myData = {
    name: 'Faiz',
    email: 'sfahmed129@gmail.com'
}

let secondData = myData;
secondData.email = 'faizahmed@gmail.com';

console.log(myData.email);
console.log(secondData.email);

//output
// faizahmed@gmail.com
// faizahmed@gmail.com

