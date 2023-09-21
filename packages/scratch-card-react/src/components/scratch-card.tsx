import { useEffect, useRef, useState } from "react";
import type { FC, ReactNode } from "react";
import { useCanvasInit } from "../hook/useCanvas";
import "./scratch-card.less";

const classPrefix = "scratch-card";

type ScratchCardProps = {
  width?: number | string;
  height?: number | string;
  BackgroundColor?: string;
  children?: ReactNode;
};

const defaultProps = {
  width: 360,
  height: 360,
  BackgroundColor: "#ddd",
};

const ScratchCard: FC<ScratchCardProps> = (p) => {
  const props = Object.assign(defaultProps, p);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  useCanvasInit({
    canvasRef,
    ...props,
  });

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
        {props.children}
      </div>
    </div>
  );
};

export default ScratchCard;
