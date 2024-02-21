// Immediately Invoked Function Expressions (IIFE)

//Global scope k pollution se problem hoti hai kai baar is liye global scope k variables ya jo bhi declaration hai
//uske pollution ko hatane k liye use karte hain

//()() - first parenthesis is the place where we define the function and the second is its exeuction call

//must use semicolon because yeh immediately invoke to hogya magar isse pata nahi hai context ko rokna kahan hai

//arrow function can also run in IIFE

//named iffe means first one which has name

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();


//we pass parameters in second paranthesis because it is exeuction call
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

