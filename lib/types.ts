import type { Buffer } from 'node:buffer'

export type RandomSequenceGeneratorFn = (charCount: number) => string
export type ChunkedCodeGeneratorFn = (charCount: number) => Buffer