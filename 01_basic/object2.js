//part2
// Using singleton object (via constructor)
// const tinderUser1 = new Object();

// // Using non-singleton object (via literal)
// const tinderUser2 = {};
// tinderUser2.id="123abc";
// tinderUser2.name="Sammy";
// tinderUser2.isLoggedIn=false;

// console.log("Singleton Object:", tinderUser1);   // Output: {}
// console.log("Non-singleton Object:", tinderUser2); // Output: {}


// const regularUser={
//     email:"some@gmail.com",
//     fullname:{
//         userfullname:{
//             firstname:"payal",
//             lastname:"Mishra"
//         }
//     }
// }
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname.firstname);


// const obj1 = { 1: "a", 2: "b" };
// const obj2 = { 3: "a", 4: "b" };
// const obj3={obj1,obj2};
// // 🔹 Merging using spread operator
// const obj3 = { ...obj1, ...obj2 };

// // OR 🔹 Merging using Object.assign()
// //  const obj3 = Object.assign({}, obj1, obj2);

// console.log(obj3);  // Output: { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }



// const tinderUser = {
//   id: "user123",
//   name: "Payal",
//   age: 21,
//   isVerified: true,
//   location: "Siwan, Bihar",
//   interests: ["coding", "dancing", "traveling"],
//   contact: {
//     email: "payal@example.com",
//     phone: "1234567890"
//   }
// };


// console.log(Object.keys(tinderUser));   // Returns array of all keys
// console.log(Object.values(tinderUser)); // Returns array of all values
// console.log(Object.entries(tinderUser)); // Returns array of key-value pairs




const tinderUser = {
  id: "user123",
  name: "Payal",
  isVerified: true
};

// console.log(tinderUser.hasOwnProperty("name"));        // true
// console.log(tinderUser.hasOwnProperty("age"));         // false
// console.log(tinderUser.hasOwnProperty("toString"));    // false (inherited from Object prototype)



// for (let key in tinderUser) {
//   if (tinderUser.hasOwnProperty(key)) {
//     console.log(`${key}: ${tinderUser[key]}`);
//   }
// }



if (tinderUser.hasOwnProperty("email")) {
  console.log("Email exists:", tinderUser.email);
} else {
  console.log("Email not provided");
}


