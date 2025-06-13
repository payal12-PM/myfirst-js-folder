// //array
// let fruits = ["apple", "banana", "mango", "orange"];

// console.log(fruits);           // Print entire array
// console.log(fruits[0]);        // Access first element → apple
// console.log(fruits[2]);        // Access third element → mango

// fruits[1] = "grapes";          // Update second element
// console.log(fruits);           // ["apple", "grapes", "mango", "orange"]


// let numbers = [10, 20, 30];

// numbers.push(40);              // Add at end
// numbers.unshift(5);            // Add at beginning
// console.log(numbers);          // [5, 10, 20, 30, 40]

// numbers.pop();                 // Remove last
// numbers.shift();               // Remove first
// console.log(numbers);          // [10, 20, 30]

// console.log(numbers.length);   // 3

// console.log(numbers.includes(20)); // true

// console.log(numbers.indexOf(2));

// // const newarr=myArr.join();
// // console.log(myArr);
// // console.log( newarr);


// const myArr = ["Payal", "Ravi", "Amit"];

// const newarr = myArr.join(); // Converts array to string, separated by commas

// console.log(myArr);   // Original array: [ 'Payal', 'Ravi', 'Amit' ]
// console.log(newarr);  // Joined string: "Payal,Ravi,Amit"


//sliceand splice
let fruits = ["apple", "banana", "mango", "orange", "grapes"];

let slicedFruits = fruits.slice(1, 4); // from index 1 to 3 (4 excluded)

console.log("Original:", fruits);         // [ 'apple', 'banana', 'mango', 'orange', 'grapes' ]
console.log("Sliced:", slicedFruits);     // [ 'banana', 'mango', 'orange' ]



let colors = ["red", "green", "blue", "yellow", "pink"];

// Remove 2 elements starting from index 1
let removedColors = colors.splice(1, 2); 

console.log("Modified:", colors);         // [ 'red', 'yellow', 'pink' ]
console.log("Removed:", removedColors);   // [ 'green', 'blue' ]


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++==

// let array1 = ["apple", "banana"];
// let array2 = ["mango", "orange"];

// array1.push(...array2); // Push elements of array2 into array1

// console.log("Merged array:", array1); // ['apple', 'banana', 'mango', 'orange']


// let array1 = ["red", "green"];
// let array2 = ["blue", "yellow"];

// let combined = array1.concat(array2); // Returns a new array

// console.log("Original array1:", array1);     // ['red', 'green']
// console.log("Combined array:", combined);    // ['red', 'green', 'blue', 'yellow']





// let a1 = [1, 2];
// let a2 = [3, 4];

// for (let item of a2) {
//     a1.push(item);
// }

// console.log("Result:", a1); // [1, 2, 3, 4]


let array1 = ["apple", "banana"];
let array2 = ["mango", "orange"];

// 🔹 Using spread to merge both arrays
let combinedArray = [...array1, ...array2];

console.log("Array 1:", array1);           // ["apple", "banana"]
console.log("Array 2:", array2);           // ["mango", "orange"]
console.log("Combined Array:", combinedArray); // ["apple", "banana", "mango", "orange"]




let finalArray = ["Start", ...array1, "Middle", ...array2, "End"];

console.log(finalArray); 
// Output: ["Start", "apple", "banana", "Middle", "mango", "orange", "End"]





let arr = [1, 2, [3, 4], [5, 6]];

let flatArr = arr.flat();  // Default flattens one level
console.log(flatArr);      // Output: [1, 2, 3, 4, 5, 6]

let deepArr = [1, 2, [3, 4, [5, 6]]];

let fullyFlat = deepArr.flat(2);  // Flatten 2 levels
console.log(fullyFlat);           // Output: [1, 2, 3, 4, 5, 6]

let ultraDeep = [1, [2, [3, [4, 5]]]];

console.log(ultraDeep.flat(Infinity));  // Output: [1, 2, 3, 4, 5]


console.log(Array.isArray("Payal"));
console.log(Array.from("Hitesh"));


console.log(Array.from({name:"payal"}));
let score1 =100;
let score2 =700;
let score3 =500;
console.log (Array.of(score1,score2,score3));




let newArr = Array.of(10, 20, 30);

console.log(newArr);  // Output: [10, 20, 30]
console.log(Array.of("Payal", "Ravi")); // ["Payal", "Ravi"]



console.log(Array.isArray([1, 2, 3]));  // true
console.log(Array.isArray("Payal"));   // false
console.log(Array.isArray({name: "Payal"})); // false


let doubled = Array.from([1, 2, 3], x => x * 2);
console.log(doubled);  // Output: [2, 4, 6]
