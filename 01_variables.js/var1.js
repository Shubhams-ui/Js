const accountId=8401//Here it the value is fixed
let accountEmail= "Shubh@gmail.com"
var accountPassword="12345"
accountCity="Gzb"
let accountState//if not given value it will show undefined if printed this

//accountId=2 //Not allowed

accountEmail="abc@gmail.com"
accountPassword="787878"
accountCity="Bengaluru"

console.log(accountId)

/*
Prefer not to use var because of issue in 
block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])//console.table() can be used to print multiplevariaables at once
//It is printed in a table form