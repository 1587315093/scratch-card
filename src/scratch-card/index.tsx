import type { PropsWithChildren } from 'react';
import { forwardRef, useImperativeHandle, useRef } from 'react';
import { useCardInit } from './hooks';
import './index.less';

export type ScratchCardType = {
  coverColor: string;
  width: number;
  height: number;
};
export type ScratchCardProps = PropsWithChildren<
  Partial<ScratchCardType> & {
    coverImg?: string;
  }
>;

const classPrefix = 'scratch-card';

const defaultProps = {
  width: 360,
  height: 360,
  coverColor: '#ddd',
};

const ScratchCard = forwardRef<unknown, ScratchCardProps>((p, ref) => {
  const props = { ...defaultProps, ...p };

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [, initDone] = useCardInit({
    canvasRef,
    ...props,
  });

  useImperativeHandle(ref, () => ({
    canvasContainer: canvasRef.current,
    initDone,
  }));

  return (
    <div
      className={classPrefix}
      style={{ width: props.width, height: props.height, marginLeft: 20 }}
    >
      <canvas ref={canvasRef} className={`${classPrefix}-canvas`}></canvas>
      <div
        className={`${classPrefix}-container`}
        style={{ width: props.width, height: props.height }}
      >
        {initDone && props.children}
      </div>
    </div>
  );
});

export default ScratchCard;
