function wordCount(string) {
  const words = string.split(' ')
  return words.length
}

function wordFrequencyTable(string) {
  const words = string.split(' ')
  let wordCounts = {}
  words.forEach(word => {
    wordCounts[word] = (wordCounts[word] || 0) + 1
  })
  return wordCounts
}

let skipConjunctions = words => {
  return words.split(' ').filter( word => {
    wordLowerCase = word.toLowerCase()
    return wordLowerCase!=='and' && wordLowerCase!=='or' && wordLowerCase!=='the' && wordLowerCase!=='of'
  }).join(' ')
}

const sentence = 'the brown fox jumps over the lazy dog'
const conjunctionLessSentence = skipConjunctions(sentence)
console.log('-------- WITH CONJUNCTIONS --------')
console.log(`There are ${wordCount(sentence)} words in: ${sentence}`)
console.log(wordFrequencyTable(sentence))
console.log('-------- WITHOUT CONJUNCTIONS --------')
console.log(`There are ${wordCount(conjunctionLessSentence)} words in: ${conjunctionLessSentence}  without Conjunctions`)
console.log(wordFrequencyTable(conjunctionLessSentence))
console.log('-------- 5 MOST POPULAR WORDS --------')
wordFrequencyTableResult = wordFrequencyTable(conjunctionLessSentence)
// console.log(wordFrequencyTable(conjunctionLessSentence2).sort().slice(0,5))
/*

Challenges:
1. Skip conjuctions (and / or / the / of) from `wordFrequencyTable` function
2. Skip conjuctions (and / or / the / of) from `wordCount` function
3. Change the sentence to the "It was the best of times…" chapter 1 excerpt from here: https://en.wikiquote.org/wiki/A_Tale_of_Two_Cities
4. Find the five most popular words using the result of `wordFrequencyTable`

*/

const sentence2 = 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only.'
const conjunctionLessSentence2 = skipConjunctions(sentence2)
console.log('-------- WITH CONJUNCTIONS --------')
console.log(`There are ${wordCount(sentence2)} words in: ${sentence2}`)
console.log(wordFrequencyTable(sentence2))
console.log('-------- WITHOUT CONJUNCTIONS --------')
console.log(`There are ${wordCount(conjunctionLessSentence2)} words in: ${conjunctionLessSentence2}  without Conjunctions`)
console.log(wordFrequencyTable(conjunctionLessSentence2))
console.log('-------- 5 MOST POPULAR WORDS --------')
wordFrequencyTableResult = wordFrequencyTable(conjunctionLessSentence2)
// console.log(wordFrequencyTable(conjunctionLessSentence2).sort().slice(0,5))

// Convert an Object to Array
const convertObjectToArray = object => {
  let array = []
  Object.keys(object).map( key => { // Better way of looping into objects
    array.push([key, object[key]])
  })
  return array
}
let sortableWordFrequencyTableResult = convertObjectToArray(wordFrequencyTableResult)

// Sort Array by Index[1] in Descending Order
const sortArrayByIndex = (array, i) => {
  //return array.sort( (a,b) => { return a[i] - b[i] }) // Ascending order
  return array.sort( (a,b) => { return b[i] - a[i] }) // Descending
}

// Reverse sort in descending order and get top 5
//console.log(sortArrayByIndex(sortableWordFrequencyTableResult, 1).reverse().slice(0,5)) // If using ascending order, do a reverse
console.log(sortArrayByIndex(sortableWordFrequencyTableResult, 1).slice(0,5)) // No need to reverse in descending order