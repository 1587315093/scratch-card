import { useEffect, useRef } from "react";
import type { FC, ReactNode } from "react";
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

  useEffect(() => {
    initCanvas();
  }, []);

  const initCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas?.getContext("2d");
    if (!context) return;

    canvas.width = props.width;
    canvas.height = props.height;
    context.fillStyle = props.BackgroundColor;
    context.fillRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <div
      className={classPrefix}
      style={{ width: props.width, height: props.height }}
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
