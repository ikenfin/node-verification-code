# Verification code generator for Node.js

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](#)

> Simple library to generate verification codes without dependencies for Node.js.

This library utilizes in-built Node.js module `crypto` to effective random numeric sequences generation, but also you can implement your own function to generate random sequences, using simple contract: `function (charCount: number <MAX 10>) => string`

### Minimal nodejs versions

From version 1.1.4 support of legacy nodejs was dropped. Now minimal version of nodejs is 14.

If you need this library for node 12 - please downgrade to version 1.1.2!

## Usage

If digital codes is only what you need - just use shortcut **getDigitalCode**

```js
const { getDigitalCode } = require('node-verification-code')
const smsVerificationCodeBuffer = getDigitalCode(4) // Will produce Buffer contains 4 random digits

// sendSms(phone, smsVerificationCodeBuffer.toString())
```

## Own alphabet

Library is built on two entites:

* **generator** - function which generates `Buffer` with random content any length. It utilises sequence-function to produce random sequences
* **sequence-function** - function which provides sequence of random elements (*up to 10 symbols*)

> Although sequence size is limited to 10 symbols, it doesn't mean you cannot generate longer codes. Generator will call sequence-function multiple times to get code with desired length.

So, to create own code generator you will need to create your own sequence-function. To do so you can simply use **sequenceFromAlphabet** shortcut as follows:

```js
const { sequenceFromAlphabet, createGenerator } = require('node-verification-code')

// create sequence function
const emojiSequence = sequenceFromAlphabet(['🐶', '🐱', '🐭', '🐹', '🐰'])

// create generator from sequence function
const getEmojiCode = createGenerator(emojiSequence)

getEmojiCode(4).toString() // -> for example: 🐹🐭🐹🐰
```

Also, you can create your own sequence function by hand, just implement `(number) => string` contract and pass it to `createGenerator`:

```js
const { createGenerator } = require('node-verification-code')

/*
  !!! only shown as example, don't do this in real code - crypto module produces better results

  Sequence-function contract implementation:
  (number) => string
*/
const mathRandomSequence = (charCount) => '0'.repeat(charCount).replaceAll('0', () => Math.floor(Math.random() * 10))

// Create code generator from sequence
const makeMyOwnVerificationCode = createGenerator(mathRandomSequence)

// Generate code
makeMyOwnVerificationCode(4).toString() // -> for example: '2108'
```

## Install

```sh
npm install node-verification-code
```

## Run tests

```sh
npm run test
```

## Author

👤 **Tominov Sergey**

* Website: https://ikfi.ru
* Github: [@ikenfin](https://github.com/ikenfin)

## Show your support

Give a ⭐️ if this project helped you!

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
