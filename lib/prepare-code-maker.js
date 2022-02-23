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
const prepareChunkedCodeGenerator = (fn) => (size) => {
  const resultBuffer = Buffer.alloc(size)
  const iterations = Math.ceil(size / MAX_CHUNK_SIZE)

  for (let i = 0; i < iterations; i++) {
    const step = MAX_CHUNK_SIZE * i
    // calculate how many digits we need to generate
    const take = size > MAX_CHUNK_SIZE + step ? MAX_CHUNK_SIZE : size - step
    // fill buffer with generated code
    resultBuffer.fill(fn(take), step, step + take)
  }

  return resultBuffer
}

module.exports = {
  prepareChunkedCodeGenerator
}
