const accountId=143
let accountemail="matyank@.com"
var acountName="Mayank"
accountbranch="CANARA BANK"

let accountstate

//Changing the values
accountemail="hc@hc.com"
acountName="Satyam"
accountbranch="Jaipur"  //we can also declare in this way as well

//Trying to update const
//accountId=321
console.log(accountId);   //TypeError: Assignment to constant variable.

//To print multiple variables in table format
console.table([accountemail,acountName,accountbranch,accountstate])

/*var is not to use-->Because of issue in Block/Functional Scope*/



