const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depth = 0;

    arr.forEach(el => {
      if (Array.isArray(el)) {
        depth = Math.max(this.calculateDepth(el), depth);
      }
    });

    return 1 + depth;  
  }
};