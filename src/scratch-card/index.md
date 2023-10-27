# ScratchCard 刮刮卡

## 示例用法

<code src="./demo/demo1.tsx">基本使用</code>
<code src="./demo/demo2.tsx">完整用法</code>

## 属性

| 属性         | 说明                       | 类型                                           | 默认值 |
| ------------ | -------------------------- | ---------------------------------------------- | ------ |
| classNames   | 语义结构化的 className     | `{ root?:string, mask?:string, body?:string }` | -      |
| children     | 刮开蒙层显示的底部元素     | `ReactNode`                                    | -      |
| coverColor   | 刮刮卡蒙版的颜色           | `string`                                       | `#ddd` |
| coverImg     | 刮刮卡蒙版的图片           | `string \| Promise<any>`                       | -      |
| callbackInfo | 刮开一定比例触发的回调信息 | `{ callback:()=>void,radio:number }`           | -      |
| width        | 刮刮卡宽度                 | `number`                                       | `240`  |
| height       | 刮刮卡高度                 | `number`                                       | `120`  |

```ts
export type ScratchCardType = {
  coverColor: string;
  width: number;
  height: number;
};

export type ScratchCardProps = PropsWithChildren<
  Partial<ScratchCardType> & {
    coverImg?: string | Promise<any>;
    classNames?: {
      root?: string; // 根元素的class
      mask?: string; // 蒙版canvas的class
      body?: string; // 底层元素的class
    };
    callbackInfo?: {
      calllback?: () => void; // 回调
      radio?: number; // 比例
    };
  }
>;
```

## Ref

| 属性            | 说明        | 类型                |
| --------------- | ----------- | ------------------- |
| canvasContainer | canvas 节点 | `HTMLCanvasElement` |
| initDone        | 初始化完成  | `boolean`           |
| clearCard       | 清除蒙版    | `()=>void`          |

```ts
export type ScratchCardRef = {
  canvasContainer: HTMLCanvasElement;
  initDone: boolean;
  clearCard: () => void;
};
```
