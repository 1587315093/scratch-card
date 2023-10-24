# ScratchCard 刮刮卡（React版）

[![NPM version](https://img.shields.io/npm/v/scratch-card-react.svg?style=flat)](https://npmjs.org/package/scratch-card-react)
[![NPM downloads](http://img.shields.io/npm/dm/scratch-card-react.svg?style=flat)](https://npmjs.org/package/scratch-card-react)

## todo

1. 支持className

## 使用

```bash
npm i scratch-card-react
# or
yarn add scratch-card-react
# or
pnpm i scratch-card-react
```

## API

| 属性       | 说明                   | 类型        | 默认值 |
| ---------- | ---------------------- | ----------- | ------ |
| children   | 刮开梦层显示的底部元素 | `ReactNode` | -      |
| coverColor | 刮刮卡蒙版的颜色       | `string`    | `#ddd` |
| coverImg   | 刮刮卡蒙版的图片       | `string`    | -      |
| width      | 刮刮卡宽度             | `number`    | `360`  |
| height     | 刮刮卡高度             | `number`    | `360`  |

## 开发

```bash
# install dependencies
$ pnpm install

# develop library by docs demo
$ pnpm start

# build library source code
$ pnpm run build

# build library source code in watch mode
$ pnpm run build:watch

# build docs
$ pnpm run docs:build

# check your project for potential problems
$ pnpm run doctor
```

## LICENSE

MIT
