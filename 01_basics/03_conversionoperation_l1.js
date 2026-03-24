let score =33
let scr="33"
let sc="12abc"
//both are used to check type of variable
console.log(typeof score);
console.log(typeof(score));
console.log(typeof(scr));
console.log(typeof(sc));

let valueInNumber=Number(scr);//it converts it into number type
console.log(typeof(valueInNumber));

let valueInnum=Number(sc);
console.log(typeof(valueInnum));//type shows number but it is not actually
console.log(valueInnum);// we get NaN as sc cannot be number
/*
In case of null if converted it gives 0
If undefined is converted it gives NaN
for boolean 0 & 1
*/

// "33"=>33
// "33abc"=> Nan
// true=>1; false=>0

"When converted into boolean"
// 1=>true; 0=>false
// ""=> fasle  if string is empty it is false
// "Shub"=>true if not empty it is true