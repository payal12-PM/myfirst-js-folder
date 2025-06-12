let score = 33;
console.log(typeof score);        // Outputs: "number"
console.log(typeof(score));       // Also outputs: "number"

//"35" => 33 , "33abc"=>NaN

let store = "35";
console.log(typeof store);          // "string"

let valuenumber = Number(store);
console.log(typeof valuenumber);    // "number"
console.log(valuenumber);           // 35


let isLoggedIn=1;
let booleanIsLoggedIn=Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);
//1=>true; ,0=> false
//""=>false
//"hitesh"=>true

let someNumber=33;
let stringNumber=String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);

