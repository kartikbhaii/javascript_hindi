const accountId = 144553
let accountEmail = "kartikeysingh@gmail.com";
var accountPassword = "Jaipur"
accountState = "In Process"
let account;


// accountId = 11111;

accountEmail = "hello@hello"
accountPassword = 12345678
accountState = "completed"


/* NOTE:    
Prefer not to use var 
because of issue in block scope 
and functional scope
*/


console.log(accountId);


console.table([accountId, accountEmail, accountPassword, accountState, account])