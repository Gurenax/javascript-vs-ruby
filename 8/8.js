// First you must `yarn add chalk` or `npm install chalk --save`
const chalk = require('chalk')

console.log('Neo, choose the')
console.log(chalk.blue('Blue pill'))
console.log('or the')
console.log(chalk.red('Red pill'))

/*
Challenges:
1. Display 'The 80s ruled' in yellow text on magenta background.
2. Display 'RGB' with each letter in its color on a black background
2. Display 'CMYK' with each letter in its color on a white background
*/

console.log(chalk.yellow('The 80s ruled'))
console.log(chalk.bgBlack(chalk.red('R'), chalk.green('G'), chalk.blue('B')))
console.log(chalk.bgWhite(chalk.cyan('C'), chalk.magenta('M'), chalk.yellow('Y'), chalk.black('K')))