const FS = require('fs')
const Path = require('path')

console.log('Now:', new Date())
console.log('Today:', new Date().toDateString())


now = (new Date()).toISOString()
const filePath = Path.join(__dirname, 'timestamp.txt')
FS.writeFileSync(filePath, now)

/*
Challenges:
1. Work out the date in 100 days, and display it
2. Work out the date 1000 days ago in the past, and display it
*/

const addDays = (date, days) => {
  const result = new Date(date)
  result.setDate(result.getDate() + days)
  return result
}

const subtractDays = (date, days) => {
  const result = new Date(date)
  result.setDate(result.getDate() - days)
  return result
}

console.log('Now plus 100 days:', addDays(new Date(), 100).toDateString())
console.log('Now minus 1000 days:', subtractDays(new Date(), 100).toDateString())