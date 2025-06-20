//this and arrow function
//we register the user

const user = {
  username: "payal",
  price: 999,
  welcomeMessage: function () {
    console.log(`${this.username}, welcome to the website`);
    // console.log(this);
  }
};

// Call the function with parentheses to execute it
user.welcomeMessage();
user.username="Aakash"
user.welcomeMessage();
console.log(this);


//in arrow function we cann't use this
// in browser ,engine:name(node,deno),global object window object 
// function chai(){
//     let username ="payal"
//     console.log(this.username);//undefined dome manipulation
// }
// chai();



// const chai=function chai(){
//     let username ="payal"
//      console.log(this.username);
//  }

// chai();


// const chai= ()=>{
//     let username ="payal"
//      console.log(this.username);
//  }
// chai();

// const chai= ()=>{
//     let username ="payal"
//      console.log(this);
//  }
// chai();

// ()=>{}

  // const addTwo =(num1, num2) =>{
  //   return num1+num2 explicitally
  // }
  // console.log(addTwo(3,4))

  //implicite return
  // const addTwo =(num1, num2) =>  (num1+num2)//in react
  // console.log(addTwo(3,4))

  // const addTwo =(num1, num2) =>  ({username:"aakash"})
  // console.log(addTwo(3,4))

