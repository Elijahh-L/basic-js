const { NotImplementedError } = require('../extensions/index.js')

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  }

  encrypt(str, key) {
    if (!str || !key) {
      throw new Error('Incorrect arguments!')
    }

    str = str.toUpperCase()
    key = key.toUpperCase()
    let encryptedMessage = ''
    let count = 0

    for (let i = 0; i < str.length; i++) {
      if (this.alphabet.includes(str[i])) {
        let j = count % key.length
        let messageCharCode = str.charCodeAt(i) - 65
        let keyCharCode = key.charCodeAt(j) - 65
        let encryptedCharCode = ((messageCharCode + keyCharCode) % 26) + 65
        encryptedMessage += String.fromCharCode(encryptedCharCode)
        count++
      } else {
        encryptedMessage += str[i]
      }
    }

    return this.isDirect
      ? encryptedMessage
      : encryptedMessage.split('').reverse().join('')
  }

  decrypt(str, key) {
    if (!str || !key) {
      throw new Error('Incorrect arguments!')
    }

    str = str.toUpperCase()
    key = key.toUpperCase()
    let decryptedMessage = ''
    let count = 0

    for (let i = 0; i < str.length; i++) {
      if (this.alphabet.includes(str[i])) {
        let j = count % key.length
        let encryptedCharCode = str.charCodeAt(i) - 65
        let keyCharCode = key.charCodeAt(j) - 65
        let decryptedCharCode =
          ((encryptedCharCode - keyCharCode + 26) % 26) + 65
        decryptedMessage += String.fromCharCode(decryptedCharCode)
        count++
      } else {
        decryptedMessage += str[i]
      }
    }

    return this.isDirect
      ? decryptedMessage
      : decryptedMessage.split('').reverse().join('')
  }
}

module.exports = {
  VigenereCipheringMachine,
}
