const CustomError = require("../extensions/custom-error");

const chainMaker = {
  stack: [], 

  getLength() {
    return this.stack.length
  },
  addLink(value = '') {
    this.stack.push(value)
    return this
  },
  removeLink(position) {
    if (position < 1 || position > this.stack.length - 1) {
      this.stack = []
      throw new Error('THROWN')
    }
    this.stack.splice(position - 1, 1)
    return this
  },
  reverseChain() {
    this.stack.reverse()
    return this
  },
  finishChain() {
    let chain = ''
    for (let index = 0; index < this.stack.length; index++) {
      const element = this.stack[index];
      chain += `( ${element} )~~`
    }
    this.stack = []
    return chain.slice(0, -2)
  }
};

module.exports = chainMaker;
