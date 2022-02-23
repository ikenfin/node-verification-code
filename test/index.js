const assert = require('assert').strict
const { prepareChunkedCodeGenerator, randomNumbersSequence } = require('../lib')

/*
  Simple module tests
*/

// Test randomNumbersSequence func
Array(10)
  .fill(0)
  .forEach((_, n) => {
    const charCount = n + 1 // skip zero
    assert.match(
      randomNumbersSequence(charCount),
      new RegExp(`^\\d{${charCount}}$`),
      'Seems that function is returned wrong result!'
    )
  })

assert.throws(() => {
  randomNumbersSequence(0)
})

assert.throws(() => {
  randomNumbersSequence(15)
})

// Test prepareChunkedCodeGenerator func
assert.strictEqual(
  true,
  typeof prepareChunkedCodeGenerator(randomNumbersSequence) === 'function',
  'prepareChunkedCodeGenerator MUST return function by contract!'
)

const getRandom = prepareChunkedCodeGenerator(randomNumbersSequence)

// Check for big numbers
assert.doesNotThrow(() => {
  getRandom(15)
  getRandom(150)
  getRandom(1500)
}, 'preparedChunkedGenerator MUST NOT throw on big numbers!')

Array(1000)
  .fill(0)
  .forEach((_, n) => {
    const charCount = n + 1 // Skip zero
    const result = getRandom(charCount)

    assert.equal(true, Buffer.isBuffer(result), 'MUST return Buffer')
    assert.equal(
      result.length,
      charCount,
      'Buffer length MUST be equal to charCount for number sequences'
    )

    assert.match(
      result.toString(),
      new RegExp(`^\\d{${charCount}}$`),
      'Seems that function is returned wrong result!'
    )
  })
