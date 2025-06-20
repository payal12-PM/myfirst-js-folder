//scope where we access the variable ,nested scope like in finction ,closer:technique (document object model)
//nested scope 

function one (){
const username ="Hitesh";

function two(){
    const website= "youtube";
    console.log(username);
}
// console.log(website); not access
 two(); //execute

}

one(); //execute



//if else

if(true){
    const username="payal"
    if(username==="payal"){
        const website="instagram"
        console.log(username+website);
    }
    // console.log(website);
}
// console.log(username);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ interesting +++++++++++++++++++++++

function addone(num){
    return num+1
}
addone(6)


const addTwo =function(num){   //variable (expretion) json value, function
  return num+2
}
addTwo(6)

addTwo(6)
const addTwo  =function(num){   //hosting
  return num+2
}



console.log(addone(6))
function addone(num){
    return num+1
}