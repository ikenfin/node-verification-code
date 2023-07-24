import type { RandomSequenceGeneratorFn} from './types'

import { randomInt } from 'node:crypto'

/*
	Generate random numbers sequence
*/
export const numericSequence: RandomSequenceGeneratorFn = (size) =>
  randomInt(0, Math.pow(10, size) - 1)
    .toString()
    .padStart(size, '0')

/*
  Shortcut function to create sequence generator function from custom alphabet
  Example:
    const zeroOneSequence = sequenceFromAlphabet([0,1])
*/
export const sequenceFromAlphabet =
  (alphabet: any[] = []): RandomSequenceGeneratorFn =>
    (charCount) =>
      Array(charCount)
        .fill('')
        .map(() => alphabet[randomInt(0, alphabet.length)])
        .join('')
