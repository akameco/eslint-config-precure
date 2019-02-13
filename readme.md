# eslint-config-precure

[![Build Status](https://travis-ci.org/akameco/eslint-config-precure.svg?branch=master)](https://travis-ci.org/akameco/eslint-config-precure)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![npm version](https://badge.fury.io/js/eslint-config-precure.svg)](https://www.npmjs.com/package/eslint-config-precure)
[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors)

> ESLint shareable config for me

## Features

- prettier
- react
- react
- flowtype
- TypeScript

## Install

```
$ yarn add --dev eslint eslint-config-precure
```

```
$ npm install --save-dev eslint eslint-config-precure
```

## Usage

.eslintrc

```json
{
  "extends": "precure"
}
```

### TypeScript

```json
{
  "extends": ["precure", "precure/typescript"]
}
```

### Jest

```json
{
  "extends": ["precure", "precure/jest"]
}
```

## Auto Config

if you use `typescript`, enable [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint)

if you use `jest`, enable [eslint-plugin-jest](https://github.com/jest-community/eslint-plugin-jest)

if you use `react`, enable [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react)

if you use `flow-bin`, enable [eslint-plugin-flowtype](https://github.com/gajus/eslint-plugin-flowtype)

```json
{
  "extends": "precure/auto"
}
```

## Contributors

Thanks goes to these wonderful people
([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars2.githubusercontent.com/u/4002137?v=4" width="100px;" alt="akameco"/><br /><sub><b>akameco</b></sub>](http://akameco.github.io)<br />[💻](https://github.com/akameco/eslint-config-precure/commits?author=akameco "Code") [📖](https://github.com/akameco/eslint-config-precure/commits?author=akameco "Documentation") [⚠️](https://github.com/akameco/eslint-config-precure/commits?author=akameco "Tests") [🚇](#infra-akameco "Infrastructure (Hosting, Build-Tools, etc)") | [<img src="https://avatars3.githubusercontent.com/u/38746192?v=4" width="100px;" alt="bsky"/><br /><sub><b>bsky</b></sub>](https://bsky.moe)<br />[💻](https://github.com/akameco/eslint-config-precure/commits?author=imbsky "Code") |
| :---: | :---: |

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the
[all-contributors](https://github.com/kentcdodds/all-contributors)
specification. Contributions of any kind welcome!

## License

MIT © [akameco](http://akameco.github.io)
