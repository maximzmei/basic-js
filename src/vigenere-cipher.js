class VigenereCipheringMachine {
  constructor(rev = true) {
    this.rev = !rev;
  }

  _vigenere(message, key, decode = false) {
    if (!message || !key) throw new Error();

    let i = 0, b;
    key = key.toUpperCase().replace(/[^A-Z]/g, '');

    const ordA = a => a.charCodeAt(0) - 65;

    const result = message.toUpperCase().replace(/[A-Z]/g, a => {
      b = key[i++ % key.length];
      return String.fromCharCode(((ordA(a) + (decode ? 26 - ordA(b) : ordA(b))) % 26 + 65));
    });

    return this.rev? result.split('').reverse().join('') : result;
  }

  encrypt(message, key) {
    return this._vigenere(message, key)
  }

  decrypt(message, key) {
    return this._vigenere(message, key, true)
  }
}

module.exports = VigenereCipheringMachine;