const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  var res = [].concat(...matrix)

  var result = res.filter(el => el === '^^').length

  return(result)
};
