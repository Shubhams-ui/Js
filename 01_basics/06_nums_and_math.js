const score= 400
console.log(score);// here it is not defoined datatype is defined dynamically

const balance=new Number(100.2215)
console.log(balance);// here since number is  defined specifically so the output shows Number

console.log(balance.toString());// it is converted into string
console.log(balance.toString().length);// checks the length
console.log(balance.toFixed(2));// how many digits should be taken after decimal\

const othernumber=23.8966
console.log(othernumber.toPrecision(3));// gives the precise value

const hundreds=100000
console.log(hundreds.toLocaleString('en-IN'));// gies comma according to indian standard

// +++++++++++++++++++++++ Maths +++++++++++++++++++++++
console.log(Math);
console.log(Math.abs(-4));// gives absolute value
console.log(Math.round(4.57856));// rounds of the number
console.log(Math.ceil(4.2));// int ceil method the top value is choosed
console.log(Math.floor(4.9));// int floor method the lower value is choosed
console.log(Math.min(4,3,5,1,2));// gives the minimum value

console.log(Math.random());// output is always btw 0-1