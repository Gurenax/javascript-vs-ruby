console.log('When is Christmas?')

var xmasDay = 25
var xmasMonth = 'December'

console.log(`Christmas is on ${xmasDay} of ${xmasMonth}`)

/*

Challenges:
1. Create variables for Anzac Day, and output them
2. Change your code to use the Date class — hint: `new Date(…)`

*/

console.log('When is Anzac Day??')

let anzacDay = 25
let anzacMonth = 'April'
let anzacYear = 2018
let anzacDate = new Date(`${anzacMonth} ${anzacDay}, ${anzacYear}`)

console.log(`Anzac Day is on ${anzacDay} of ${anzacMonth} ${anzacYear}`)
console.log(`Anzac Day is on ${anzacDate}`)
