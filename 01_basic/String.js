const name="hitesh"
const repoCount=50;
// console.log(name +repoCount+"Value");
// console.log("Hii My name is &{name} and my repo count is &{repoCount}");

console.log(`Hi, my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String ('Hitesh-hc-kuma');
console.log(gameName[0]);
console.log(gameName.__proto__);

   console.log(gameName.length);

console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));

console.log(gameName.indexOf('t'));

const newString=gameName.substring(0,4);
console.log(newString);

const anotherString =gameName.slice(0,4);
console.log(newString);

// const anotherString =gameName.slice(-8,4);
// console.log(anotherString);
// trim
const newStringone="  payal";
console.log(newStringone);
console.log(newStringone.trim());

//replace
const url="https://hitesh.com/hi%20kumar";
url.replace('%20','_');

console.log(url.replace('%20','_'));
console.log(url.includes('hitesh'));

console.log(gameName.split('-'));

