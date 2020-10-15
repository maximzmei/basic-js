const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let result = []
  let additionString = ''
  if (str === null) {str = 'null'}
  str = str.toString()
  if (options.addition === null) {options.addition = 'null'}
  if (options.addition === false) {options.addition = 'false'}
  if (!options.addition) { options.addition = '' }
  else { options.addition.toString() }
  
  if (!options.repeatTimes) {options.repeatTimes = 1}
  if (!options.additionRepeatTimes) {options.additionRepeatTimes = 1}
  
  for (let index = 0; index < options.additionRepeatTimes; index++) {
    additionString += `${options.addition}${index+1!=options.additionRepeatTimes?options.additionSeparator:''}`
  }

  for (let index = 0; index < options.repeatTimes; index++) {
    result.push(`${str}${additionString}`)
  }
  if (!options.separator) {options.separator = '+'}
  if (!options.additionSeparator) {options.additionSeparator = '|'}
  return result.join(options.separator)
}