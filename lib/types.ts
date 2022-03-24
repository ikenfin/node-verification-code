export type RandomSequenceGeneratorFn = (charCount: number) => string
export type ChunkedCodeGeneratorFn = (charCount: number) => Buffer

// export declare const createGenerator: (
//   fn: RandomSequenceGeneratorFn
// ) => ChunkedCodeGeneratorFn

// export declare const numericSequence: RandomSequenceGeneratorFn

// export declare const sequenceFromAlphabet: (
//   alphabet: unknown[]
// ) => RandomSequenceGeneratorFn
