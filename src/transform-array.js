const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error
  let newArray = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--discard-next') {
      newArray.push(arr[i + 1])
      newArray.pop()
      i += 2
    } else if (arr[i] === '--discard-prev') {
      newArray.pop()
    } else if (arr[i] === '--double-next') {
      newArray.push(arr[i + 1])
    } else if (arr[i] === '--double-prev') {
      newArray.push(arr[i - 1])
    } else {
      newArray.push(arr[i])
    }
  }
  if (arr.includes('undefined')) {return newArray}
  else {return newArray.filter((el) => el !== undefined)} 
}