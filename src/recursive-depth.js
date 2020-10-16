const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  constructor() {
    this.depth = 0
    this.maxDepth = 0
  }

  calculateDepth(arr) {
    if (Array.isArray(arr)) {
      this.depth++
      this.maxDepth = this.maxDepth < this.depth ? this.depth : this.maxDepth
      arr.forEach(this.calculateDepth, this)
      this.depth--
    }
    return this.maxDepth
  }
}