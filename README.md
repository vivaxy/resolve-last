# resolve-last

[![Build Status][travis-image]][travis-url]
[![NPM Version][npm-version-image]][npm-url]
[![NPM Downloads][npm-downloads-image]][npm-url]
[![MIT License][license-image]][license-url]
[![Standard Version][standard-version-image]][standard-version-url]
[![Codecov][codecov-image]][codecov-url]

👌Only resolve last promise

## Install

```sh
yarn add resolve-last
// or
npm install resolve-last
```

## Usage

```js
import resolveLast from 'resolve-last';

// yourAsyncFunction: (...args: Arguments) => Promise<Result>
const resolveLastAsyncFunction = resolveLast(yourAsyncFunction);

button.addEventListener('click', async function(e) {
  await resolveLastAsyncFunction(...args);
  // `console.log` only run with last called args
  console.log('resolved with ' + args.join(', '));
});
```

_(Project created by [create-n](https://github.com/vivaxy/create-n).)_

[travis-image]: https://img.shields.io/travis/vivaxy/resolve-last.svg?style=flat-square
[travis-url]: https://travis-ci.org/vivaxy/resolve-last
[npm-version-image]: https://img.shields.io/npm/v/resolve-last.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/resolve-last
[npm-downloads-image]: https://img.shields.io/npm/dt/resolve-last.svg?style=flat-square
[license-image]: https://img.shields.io/npm/l/resolve-last.svg?style=flat-square
[license-url]: LICENSE
[standard-version-image]: https://img.shields.io/badge/release-standard%20version-brightgreen.svg?style=flat-square
[standard-version-url]: https://github.com/conventional-changelog/standard-version
[codecov-image]: https://img.shields.io/codecov/c/github/vivaxy/resolve-last.svg?style=flat-square
[codecov-url]: https://codecov.io/gh/vivaxy/resolve-last
