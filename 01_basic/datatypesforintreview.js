// primitive 
// 7types: String,number,boolean,null,undifined,Symbole,BigInt
//reference type: non primitive
//Array,Oject,Functions

const score = 100;
const scoreValue = 100.3;
const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');  // Corrected 'Symbol'

console.log(id === anotherId);    // false
// const bigNumber=1235875760586n
// let name = "Payal";      // String
// let age = 21;            // Number
// let isStudent = true;    // Boolean
// let score;               // Undefined
// let temp = null;         // Null
// let id = Symbol("123");  // Symbol
// let bigNumber = 123456789012345678901234567890n; // BigInt





//non primitive
let person = { name: "Payal", age: 21 };       // Object
let fruits = ["apple", "banana", "mango"];     // Array
function greet() {
    console.log("Hello!");
}                                             // Function
let today = new Date();                       // Date
let pattern = /hello/i;                       // RegExp

const heros=["shaktiman","naagraj","doga"];

//object 

let myObj={
   name: "payal",
   age:22,

}
//function
const myfunction=function(){
    console.log("Hello world");
}
console.log(typeof bigNumber);

console.log(typeof outsideTemp);

console.log(typeof myfunction);

console.log(typeof heros);



























