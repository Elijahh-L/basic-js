const { NotImplementedError } = require('../extensions/index.js')

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],

  getLength() {
    return chainMaker.chain.length
  },

  addLink(value) {
    const link = `( ${value} )`
    chainMaker.chain.push(link)
    return chainMaker
  },

  removeLink(position) {
    if (
      !Number.isInteger(position) ||
      position < 1 ||
      position > chainMaker.chain.length
    ) {
      chainMaker.chain = []
      throw new Error("You can't remove incorrect link!")
    }
    chainMaker.chain.splice(position - 1, 1)
    return chainMaker
  },

  reverseChain() {
    chainMaker.chain.reverse()
    return chainMaker
  },

  finishChain() {
    const result = chainMaker.chain.join('~~')
    chainMaker.chain = []
    return result
  },
}

module.exports = {
  chainMaker,
}
