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

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stck (Primitive), Heap (Non-Primitive)
let myName="shubham"

let anothername= myName
console.log(anothername);
anothername="Abcd"
console.log(myName);
console.log(anothername);

let user={
    email: "shub@gmail.com",
    upi: "sh@ybl"
}
// Here both gets same reference
let user2=user// So  value changes in both

user2.email="abs@gmail.com"
console.log(user.email);