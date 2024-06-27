# Node.js библиотека для генерации кодов подтверждения

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](#)

> Простая библиотека без зависимостей для генерации случайных кодов для Node.js

Эта библиотека использует встроенный в Node.js модуль `crypto` для эффективной генерации случайных цифровых последовательностей, также вы можете написать собственную функцию для генерации последовательностей используя простой контракт: `function (charCount: number <MAX 10>) => string`

## Использование

Если вам нужны исключительно цифровые коды - вы можете просто использовать функцию **getDigitalCode**

```js
const { getDigitalCode } = require('node-verification-code')
const smsVerificationCodeBuffer = getDigitalCode(4) // Возвращает nodejs буфер, содержащий 4 случайных цифры

// sendSms(phone, smsVerificationCodeBuffer.toString())
```

## Собственный алфавит

Библиотека работает на базе двух сущностей:

* генератор - функция для генерации буферов с случайным содержимым произвольной длины использующая функцию-последовательность
* последовательность - функция для построения строк из случайных элементов (до 10 символов)

Хотя размер последовательности ограничен 10 символами, это не

Библиотека предоставляет несколько вспомогательных функций для изменения поведения под ваши задачи.
Например, если вам нужно использовать собственный алфавит, то самый простой способ - использовать вспомогательную функцию **sequenceFromAlphabet**, как показано в примере ниже:

```js
const { sequenceFromAlphabet, createGenerator } = require('node-verification-code')

// Создаём последовательность из алфавита - массива с символами
const emojiSequence = sequenceFromAlphabet(['🐶', '🐱', '🐭', '🐹', '🐰'])

// Создаём генератор на основе последовательности
const getEmojiCode = createGenerator(emojiSequence)

// Генерируем случайные последовательности символов алфавита
getEmojiCode(4).toString() // -> Например: 🐹🐭🐹🐰
```

Кроме того, вы можете составить собственную функцию-последовательность вручную:

```js
const { createGenerator } = require('node-verification-code')

// Не используйте Math.random, показано только в демонстративных целях
const mathRandomSequence = (charCount) => '0'.repeat(charCount).replaceAll('0', () => Math.floor(Math.random() * 10))

// Создаём генератор из последовательности
const makeMyOwnVerificationCode = createGenerator(mathRandomSequence)

makeMyOwnVerificationCode(4).toString() // -> for example: '2108'

```

## Установка

```sh
npm install node-verification-code
```

## Модульное тестирование

```sh
npm run test
```

## Автор

👤 **Томинов Сергей**

* Website: https://ikfi.ru
* Dzen: [@tominoff](https://dzen.ru/tominoff)
* Github: [@ikenfin](https://github.com/ikenfin)

## Поддержите проект

Поставьте ⭐️ этому репозиторию, если проект помог вам!

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
