import classNames from 'classnames';
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
  }
>;

const defaultProps = {
  width: 240,
  height: 120,
  coverColor: '#ddd',
};

const ScratchCard = forwardRef<unknown, ScratchCardProps>((p, ref) => {
  const props = { ...defaultProps, ...p };

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [, initDone] = useCardInit({
    canvasRef,
    width: props.width,
    height: props.height,
    coverColor: props.coverColor,
    coverImg: props.coverImg,
  });

  useImperativeHandle(ref, () => ({
    canvasContainer: canvasRef.current,
    initDone,
  }));

  return (
    <div
      className={classNames(classPrefix, props?.classNames?.root)}
      style={{ width: props.width, height: props.height }}
    >
      <canvas
        ref={canvasRef}
        className={classNames(`${classPrefix}-mask`, props.classNames?.mask)}
      ></canvas>
      <div
        className={classNames(
          `${classPrefix}-container`,
          props.classNames?.body,
        )}
        style={{ width: props.width, height: props.height }}
      >
        {initDone && props.children}
      </div>
    </div>
  );
});

export default ScratchCard;
