const {
  createGenerator,
  numericSequence,
  sequenceFromAlphabet
} = require('./lib')

/*
  Prepared function to generate ditital verification codes
*/
const getDigitalCode = createGenerator(numericSequence)

module.exports = {
  // ready to use:
  getDigitalCode,

  // customize
  createGenerator,
  sequenceFromAlphabet,
}
