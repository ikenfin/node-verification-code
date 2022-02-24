const assert = require('assert').strict
const {
  createGenerator,
  numericSequence,
  sequenceFromAlphabet
} = require('../lib')

/*
  Utils
*/
const isFunction = (f) => typeof f === 'function'
const mkArray = (size) => Array(size).fill(0)
/*
  Simple module tests
*/

// Test numericSequence func
mkArray(10).forEach((_, n) => {
  const charCount = n + 1 // skip zero
  assert.match(
    numericSequence(charCount),
    new RegExp(`^\\d{${charCount}}$`),
    'Seems that function is returned wrong result!'
  )
})

assert.throws(() => {
  numericSequence(0)
})

assert.throws(() => {
  numericSequence(15)
})

// Test createGenerator func
assert.strictEqual(
  true,
  isFunction(createGenerator(numericSequence)),
  'createGenerator MUST return function by contract!'
)

const getRandom = createGenerator(numericSequence)

// Check for big numbers
assert.doesNotThrow(() => {
  getRandom(15)
  getRandom(150)
  getRandom(1500)
}, 'preparedChunkedGenerator MUST NOT throw on big numbers!')

mkArray(1000).forEach((_, n) => {
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

// Check how it will work with another random generators
const zeroOneGenerator = (charCount) =>
  Array(charCount)
    .fill('')
    .map(() => Math.round(Math.random()))
    .join('')

const alphaBetGenerator = (charCount) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
  return Array(charCount)
    .fill('')
    .map(() => {
      const randomIndex = Math.floor(Math.random() * alphabet.length)
      return alphabet[randomIndex]
    })
    .join('')
}

mkArray(100).forEach((_, n) => {
  const charCount = n + 1

  assert.match(
    createGenerator(zeroOneGenerator)(charCount).toString(),
    new RegExp(`^[0,1]{${charCount}}$`)
  )

  assert.match(
    createGenerator(alphaBetGenerator)(charCount).toString(),
    new RegExp(`^[a-z]{${charCount}}$`)
  )
})

// Test shortcut to create from alphabet

const abcdefAlphabet = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g' ]
const abcdefgSequence = sequenceFromAlphabet(abcdefAlphabet)

const _01234Alphabet = [ 1, 2, 3, 4, 5 ]
const _01234Sequence = sequenceFromAlphabet(_01234Alphabet)

const emojisAlphabet = [ '🚀', '🐈', '🤩', '👽', '🥶', '🀦', '🇷🇺', '💫' ]
const emojiSequence = sequenceFromAlphabet(emojisAlphabet)

mkArray(100).forEach((_, n) => {
  const charCount = n + 1

  assert.match(
    createGenerator(abcdefgSequence)(charCount).toString(),
    new RegExp(`^[${abcdefAlphabet.join(',')}]{${charCount}}$`)
  )

  assert.match(
    createGenerator(_01234Sequence)(charCount).toString(),
    new RegExp(`^[${_01234Alphabet.join(',')}]{${charCount}}$`)
  )

  assert.match(
    createGenerator(emojiSequence)(charCount).toString(),
    new RegExp(
      `(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff]){${charCount}}`
    )
  )
})
