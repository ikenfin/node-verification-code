/*
  Because we use 10 ** size - 1 formula to get digits count
  resulting values can exceed safe integer limit. To prvent such situations we limit max chunk size to 10
*/
const MAX_CHUNK_SIZE = 10

/*
  Partial applied function to make custom code generator funcs

  Call as follow:

    const makeVerificationCode = prepareChunkedCodeGenerator(myRandomSymbolsGenerator)
    makeVerificationCode(10)
*/
const createGenerator = (sequenceGenerator) => (size) => {
  const resultBuffer = Buffer.alloc(size * 8)
  const iterations = Math.ceil(size / MAX_CHUNK_SIZE)

  let offset = 0

  for (let i = 0; i < iterations; i++) {
    const step = MAX_CHUNK_SIZE * i

    // calculate how many symbols we need to generate
    const takeCount =
      size > MAX_CHUNK_SIZE + step ? MAX_CHUNK_SIZE : size - step

    const sequence = sequenceGenerator(takeCount)
    const sequenceSize = Buffer.from(sequence).byteLength

    // fill buffer with generated code
    resultBuffer.fill(sequence,  offset, offset + sequenceSize)
    offset += sequenceSize
  }

  return resultBuffer.slice(0, offset)
}

module.exports = {
  createGenerator
}
