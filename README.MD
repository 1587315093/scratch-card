# ScratchCard 刮刮卡（React 版）

[![NPM version](https://img.shields.io/npm/v/scratch-card-react.svg?style=flat)](https://npmjs.org/package/scratch-card-react) [![NPM downloads](http://img.shields.io/npm/dm/scratch-card-react.svg?style=flat)](https://npmjs.org/package/scratch-card-react) [![GitHub](https://img.shields.io/github/license/1587315093/scratch-card)](https://github.com/1587315093/scratch-card)

![card](https://github.com/1587315093/scratch-card/assets/77056991/ad41b9e9-e2e6-4927-9e6c-ec2852296377)

## 使用

欢迎提交 `issue` 与 `pr`~

```bash
$ npm install scratch-card-react
# or
$ yarn add scratch-card-react
# or
$ pnpm install scratch-card-react
```

## 属性

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| classNames | 语义结构化的 className | `{ root?:string, mask?:string, body?:string }` | - |
| children | 刮开蒙层显示的底部元素 | `ReactNode` | - |
| coverColor | 刮刮卡蒙版的颜色 | `string` | `#ddd` |
| coverImg | 刮刮卡蒙版的图片 | `string \| Promise<any>` | - |
| callbackInfo | 刮开一定比例触发的回调信息 | `{ callback:()=>void,radio:number }` | - |
| width | 刮刮卡宽度 | `number` | `240` |
| height | 刮刮卡高度 | `number` | `120` |

## Ref

| 属性            | 说明        | 类型                |
| --------------- | ----------- | ------------------- |
| canvasContainer | canvas 节点 | `HTMLCanvasElement` |
| initDone        | 初始化完成  | `boolean`           |
| clearCard       | 清除蒙版    | `()=>void`          |

## 开发

```bash
# install dependencies
$ pnpm install

# dev
$ pnpm dev

# push package
$ pnpm publish
```

## LICENSE

MIT
