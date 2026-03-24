const name="Shubham"
const repocount=14

console.log(name+repocount+"value");// Concatenation do not use this method it is ooutdated

console.log(`Hello my name is ${name} and my repo count is ${repocount}`);// we use `` in this it can be given in form of placeholder

const gamename=new String('Shubh-am');

console.log(gamename[0]);// Accessing key value pair
console.log(gamename.__proto__);

console.log(gamename.length);
console.log(gamename.toUpperCase());// changes it to uppercase but original value is not chnaged
console.log(gamename.charAt(3));// this is used to check what character is at which position
console.log(gamename.indexOf("h"));// this is used to check at what position the character is there


const newString=gamename.substring(0,6)
console.log(newString);

const antstring=gamename.slice(-5,8)
console.log(antstring);

const newString1="    shubham   "
console.log(newString1);
console.log(newString1.trim());// trim() removes starting and ending spaces

const url="https://shubh.com/shubh%20am"

console.log(url.replace("%20","-"))// this finds and replace
console.log(url.includes("Shub"))// checks whether it is present or not
console.log(url.includes("shub"))// checks whether it is present or not
console.log(gamename.split('-'));// it splits from the given
