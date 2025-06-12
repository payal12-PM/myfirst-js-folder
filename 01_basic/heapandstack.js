// 🧠 1. Stack (Primitive Types)
// Used for primitive data types
// Stored by value
// Each variable gets its own space in stack memory
// Fast access, auto-deleted when the function ends


let myYoutubename= "payal@gmail.com";
let anothername=myYoutubename;
anothername="chaiaurcode";
console.log(myYoutubename);
console.log(anothername);


// 💾 2. Heap (Non-Primitive Types)
// Used for objects, arrays, functions
// Stored by reference
// Variables point to a memory location in the heap



let userone = {
    email: "user@google.com",
    upi: "user@ybl"     // ✅ Use comma, not semicolon
};

let usertwo = userone;           // Copies the reference
usertwo.email = "payall@gmail.com";  // Updates the same object in heap

console.log(userone.email);      // Output: payall@gmail.com
console.log(usertwo.email);      // Output: payall@gmail.com










