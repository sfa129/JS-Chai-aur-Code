//'this' keyword is use to access variables in 'current context (means current values)'
//Interivew Question: in window, the global object is window object

const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

//'this' keyword is use is objects but not in functions, eg is below
// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this);
}


// chai()

//explicit return (means use curly braces with return keyword - if your use curyly braces, it is compulsory to use retur keyword)
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

//implicit return (no necessity to use return keyword)
// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()