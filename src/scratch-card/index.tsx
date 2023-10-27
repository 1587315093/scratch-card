import classnames from 'classnames';
import type { PropsWithChildren } from 'react';
import { forwardRef, useImperativeHandle, useRef } from 'react';
import { useCardInit } from '../hooks';
import './index.less';

const classPrefix = 'scratch-card';

export type ScratchCardType = {
  coverColor: string;
  width: number;
  height: number;
};

export type ScratchCardProps = PropsWithChildren<
  Partial<ScratchCardType> & {
    coverImg?: string | Promise<any>;
    classNames?: {
      root?: string;
      mask?: string;
      body?: string;
    };
    callbackInfo?: {
      calllback?: () => void;
      radio?: number;
    };
  }
>;

export type ScratchCardRef = {
  canvasContainer: HTMLCanvasElement;
  initDone: boolean;
  clearCard: () => void;
};

const defaultProps = {
  width: 240,
  height: 120,
  coverColor: '#ddd',
};

const ScratchCard = forwardRef<ScratchCardRef, ScratchCardProps>((p, ref) => {
  const props = { ...defaultProps, ...p };
  const { children, classNames, ...rest } = props;

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [, initDone, clearCard] = useCardInit({
    canvasRef,
    ...rest,
  });

  useImperativeHandle(ref, () => ({
    canvasContainer: canvasRef.current as HTMLCanvasElement,
    initDone,
    clearCard,
  }));

  return (
    <div
      className={classnames(classPrefix, classNames?.root)}
      style={{ width: props.width, height: props.height }}
    >
      <canvas
        ref={canvasRef}
        className={classnames(`${classPrefix}-mask`, classNames?.mask)}
      ></canvas>
      <div
        className={classnames(`${classPrefix}-container`, classNames?.body)}
        style={{ width: props.width, height: props.height }}
      >
        {initDone && children}
      </div>
    </div>
  );
});

export default ScratchCard;
