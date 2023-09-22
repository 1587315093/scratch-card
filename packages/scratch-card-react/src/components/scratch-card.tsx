import { useEffect, useRef, useState } from "react";
import type { FC, ReactNode } from "react";
import { useCanvasInit } from "../hook/useCanvas";
import "./scratch-card.less";

const classPrefix = "scratch-card";

type ScratchCardProps = {
  children?: ReactNode;
  coverImg?: string;
  coverColor?: string;
  width?: number | string;
  height?: number | string;
};

const defaultProps = {
  width: 360,
  height: 360,
  coverColor: "#ddd",
};

const ScratchCard: FC<ScratchCardProps> = (p) => {
  const props = { ...defaultProps, ...p };

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
