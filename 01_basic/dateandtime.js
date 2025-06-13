//date 
let myDate=new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

console.log(typeof myDate);
let myCreatedDate=new Date(2023,0,23, 5,5);
console.log(myCreatedDate.toDateString());
console.log(myDate.toLocaleString());

let myCreatedDatee=new Date("05-14-2023");
console.log(myCreatedDatee.toLocaleString());

let timeStamp =Date.now();
console.log(timeStamp);
console.log(myCreatedDatee.getTime());

console.log(Date.now()/1000);
console.log(Math.floor(Date.now()/1000));

let newDate=new Date();
console.log(newDate.getDay());
console.log(newDate.getMonth()+1);



