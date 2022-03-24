import { createGenerator } from './createGenerator'
import { numericSequence } from './sequence'

export const getDigitalCode = createGenerator(numericSequence)