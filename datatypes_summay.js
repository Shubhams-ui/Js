"Primitive"
/*
7 types: String, Number, Boolean, null, undefined, Symbol(to make a value unique),
BigInt
*/
const id=Symbol('123')// Symbols are unique
const anotherId=Symbol('123')
console.log(id==anotherId);
// Js is dynamic

"Reference(Non primitive)"
/*
Array, Objects, Functions
*/
const heros=["Spiderman", "Iron-man", "Dr.Strange"]
//Objects are in {}
let myobj={
    name:"Shubham",
    age:22
}

//How to declare function
const myfunction=function(){
    console.log("Hello world");
}
//Checking types
console.log(typeof(myfunction));
console.log(typeof(heros));
console.log(typeof(id));