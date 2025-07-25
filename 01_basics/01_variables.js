const accountId = 144553 // Do not Change bec const is lock
let accountEmail = "pritam@gmail.com"// local scope
var accountPassword = "12345"// Global Scope
accountCity = "Ichalkaranji"
let accountState;
// accountId = 2 not Allowed 

accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Pune"


console.log(accountId);

/*

Prefer not to use var 
because of issue in block scope and functional scope
*/





console.table([accountId, accountEmail, accountPassword, accountCity, accountState])