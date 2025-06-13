//object literals
 const mysym = Symbol("key1");

const jsUser = {
    name: "payal",
    "full name": "payal kumari",      // ✅ Use colon :
    [mysym]: "mykey1",                // ✅ Use correct symbol variable name
    age: 18,
    location: "jaipur",
    email: "payal@email.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
};

// ✅ Accessing Properties
console.log(jsUser["email"]);         // Output: payal@email.com
console.log(jsUser.email);            // Output: payal@email.com

console.log(jsUser["full name"]);     // Output: payal kumari
console.log(jsUser[mysym]);           // Output: mykey1

jsUser.email="payal12@gmail.com";
Object.freeze(jsUser);
jsUser.email="payal122@gmail.com";
console.log(jsUser);
//function
const jsUser = {
    name: "Payal",
    greeting: function () {
        console.log(`Hello JS User. My name is ${this.name}`);
    },
    greetingTwo: function () {
        return `Welcome again, ${this.name}!`;
    }
};

// Calling both methods:
jsUser.greeting();                   // Output: Hello JS User. My name is Payal
console.log(jsUser.greetingTwo());  // Output: Welcome again, Payal!






















