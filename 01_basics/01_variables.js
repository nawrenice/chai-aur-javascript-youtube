const accountId = 144553 //constant
let accountEmail = "naren@gmail.com"
var accountPassword = "12345"
accountCity = "Springfield" //not a good practice
let accountState

// accountId = 234 //not allowed



accountEmail = "naren@yahoo.com"
accountPassword = "11111"
accountCity = "Republic"

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.log(accountId);

console.table([accountEmail, accountPassword, accountId, accountCity, accountState])
