const accountId = 13526
let accountEmail = "kuntal@google.com"
var accountPassword = "12345"
accountCity = "Howrah"
let accountState;

// accountId = 2 // not allowed

accountEmail = "kun@google.com"
accountPassword = "2525252"
accountCity = "Kolkata"

console.log(accountId);

/*
scope--> {}
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);