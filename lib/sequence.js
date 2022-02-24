const { randomInt } = require('crypto')

/*
	Generate random numbers sequence
*/
const numericSequence = (size) =>
  randomInt(0, Math.pow(10, size) - 1)
    .toString()
    .padStart(size, '0')

/*
  Shortcut function to create sequence generator function from custom alphabet
  Example:
    const zeroOneSequence = sequenceFromAlphabet([0,1])
*/
const sequenceFromAlphabet =
  (alphabet = []) =>
    (charCount) =>
      Array(charCount)
        .fill('')
        .map(() => alphabet[randomInt(0, alphabet.length)])
        .join('')

module.exports = {
  numericSequence,
  sequenceFromAlphabet
}
