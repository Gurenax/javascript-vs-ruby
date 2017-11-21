const fishLengthsFeet = [2, 3.4, 1.2, 0.4, 0.9, 2.9]
const minLengthFeet = 1.5
let legalFishInFeet = []

fishLengthsFeet.forEach((lengthFeet) => {
  if (lengthFeet < minLengthFeet) {
    console.log(`This ${lengthFeet}ft long fish is too short`)
  }
  else {
    console.log(`This ${lengthFeet}ft long fish is good`)
    legalFishInFeet.push(lengthFeet)
  }
})

console.log(`There are ${legalFishInFeet.length} legal fish`)

legalFishInCentimetres = legalFishInFeet.map((lengthFeet) => (
  lengthFeet * 30.48
))

console.log('Legal fish in cm:', legalFishInCentimetres)

/*

Challenges:
1. Convert the lengths to yards, and output them
2. Find the longest fish, and output it
3. Create a sorted copy of the centimetre lengths array, and output it

*/

let legalFishInYards = []
let longestFish = 0

// Convert ft to yards
let feetToYards = lengthFeet => {
  return lengthFeet / 3
}

// Get min length in yards
const minLengthYards = feetToYards(minLengthFeet);

// Convert every fish length in feet to yards
fishLengthsFeet.map( lengthFeet => {
  const lengthYards = feetToYards(lengthFeet);

  // If longest fish is not longest, get the new longest fish
  if( longestFish<lengthYards ) { longestFish=lengthYards; }

  // Don't push to array if fish is too short
  if ( lengthYards < minLengthYards ) {
    console.log(`This ${lengthYards}yd long fish is too short`)
  }
  else {
    console.log(`This ${lengthYards}yd long fish is good`)
    legalFishInYards.push(lengthYards)
  }
})

// Output the longest fish
console.log(`The longest fish is ${longestFish}yd`)

// Copy centimetres array and sort it
legalFishInCentimetresCopy = legalFishInCentimetres.slice().sort(function(a, b) {return a - b})

// Output sorted centimetres array
console.log('Sorted copy of centimetres lengths array: ', legalFishInCentimetresCopy)