const { prepareChunkedCodeGenerator, randomNumbersSequence } = require('./lib')

/*
  Prepared function to generate ditital verification codes
*/
const makeNumericVerificationCode = prepareChunkedCodeGenerator(
  randomNumbersSequence
)

module.exports = {
  prepareChunkedCodeGenerator,
  makeNumericVerificationCode
}
