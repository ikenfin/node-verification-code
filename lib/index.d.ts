export type RandomSequenceGeneratorFn = (charCount: number) => string
export type ChunkedCodeGeneratorFn = (charCount: number) => Buffer

export declare const prepareChunkedCodeGenerator: (
  fn: RandomSequenceGeneratorFn
) => ChunkedCodeGeneratorFn

export declare const randomNumbersSequence: RandomSequenceGeneratorFn
