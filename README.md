# Verification code generator for Node.js

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](#)

> Simple library to generate verification codes without dependencies for Node.js.

This library utilizes in-built Node.js module `crypto` to effective random numeric sequences generation, but also you can implement your own function to generate random sequences, using simple contract: `function (charCount: number <MAX 10>) => string`

### Minimal nodejs versions

From version 1.1.4 support of legacy nodejs was dropped. Now minimal version of nodejs is 14.

If you need this library for node 12 - please downgrade to version 1.1.2!

## Usage

If digital codes is only what you need - just use **getDigitalCode**

```js
const { getDigitalCode } = require('node-verification-code')
const smsVerificationCodeBuffer = getDigitalCode(4) // Will produce Buffer contains 4 random digits

// sendSms(phone, smsVerificationCodeBuffer.toString())
```

You can create custom generator in two ways. Simpliest - using **sequenceFromAlphabet** helper function as follows:

```js
const { sequenceFromAlphabet, createGenerator } = require('node-verification-code')

// create sequence function
const emojiSequence = sequenceFromAlphabet(['🐶', '🐱', '🐭', '🐹', '🐰'])

// create generator from sequence function
const getEmojiCode = createGenerator(emojiSequence)

getEmojiCode(4) // -> for example: 🐹🐭🐹🐰
```

You can also create your sequence function by hand:

```js
const { createGenerator } = require('node-verification-code')

// only shown as example, don't do this in real code - crypto module produces better results
const mathRandomSequence = (charCount) => Math.floor(Math.random() * charCount)

const makeMyOwnVerificationCode = createGenerator(mathRandomSequence)
```

## Install

```sh
yarn add node-verification-code
```

## Run tests

```sh
yarn test
```

## Author

👤 **Tominov Sergey**

* Website: https://ikfi.ru
* Github: [@ikenfin](https://github.com/ikenfin)

## Show your support

Give a ⭐️ if this project helped you!

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
