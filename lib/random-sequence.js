const { randomInt } = require('crypto')

/*
	Generate random numbers sequence
  In that case we generating random numbers using node:crypto
*/
const randomNumbersSequence = (size) =>
  randomInt(0, Math.pow(10, size) - 1)
    .toString()
    .padStart(size, '0')

module.exports = {
  randomNumbersSequence
}
