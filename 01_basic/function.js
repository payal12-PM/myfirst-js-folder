// // function
// function greet() {
//     console.log("Hello, Payal!");
//     console.log("P");
//     console.log("a");
//     console.log("y");
//     console.log("a");
//     console.log("l");
// }
// greet(); // Calling the function




// function addNumbers(num1, num2) {
//     let sum = num1 + num2;
//     console.log("The sum is: " + sum);
// }
// // Example usage:
// addNumbers(10, 20); // Output: The sum is: 30


// function addNumbers(num1, num2) {
//     console.log(num1+num2);
// }
// // Example usage:
// addNumbers(10, "a"); // Output: The sum is: 30




// function addNumbers(num1, num2) {
//     // let result =num1+num2;
//     // console.log("Hitesh");
//     // return result
//     return num1+num2;
// }
// const result =addNumbers(10, 20);
// console.log("Result:", result);



// function loginUserMessage(username="palak") {

//     // if(!username)
//     // if (username === undefined) {   
//     //     console.log("Please enter a username");
//     //     return;
//     }
//     return `${username} just logged in`;
// }

// console.log(loginUserMessage("payal")); // Output: payal just logged in


// function calculateCartPrice(num1){
//     return num1;
// }
// console.log(calculateCartPrice(200,400,2000));


// function calculateCartPrice(...num1){
//     return num1;
// }
// console.log(calculateCartPrice(200,400,2000));


function calculateCartPrice(val1,val2,...num1){
    return num1;
}
// console.log(calculateCartPrice(200,400,2000));


const user={
    username:"payal",
    prices:199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and peice is ${anyobject.prices}`);

}
// handleObject(user);

handleObject({
    username:"sam",
    prices:399
});


const myNewArray=[200,400,100,600]
function returnSecondValue(getArray){
    return getArray[1];
}
console.log(returnSecondValue(myNewArray));






