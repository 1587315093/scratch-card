import { useEffect, useRef, useState } from "react";
// import { loadImage } from "@common/utils";
import { loadImage } from "../../../../common/utils";
import type { ScratchCardHookProps } from "../type";

const useCanvasInit = (props: ScratchCardHookProps) => {
  const { canvasRef, width, height, coverColor, coverImg } = props;
  const isScratching = useRef(false);
  const [initDone, setInitDone] = useState(false); // 网络图片加载有延迟，初始化完成在渲染底层dom

  useEffect(() => {
    initCanvas();
    return () => {
      terminateCanvas();
    };
  }, []);

  const initCanvas = async () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = width;
    canvas.height = height;

    const context = canvas?.getContext("2d");
    if (!context) return;

    if (coverImg) {
      const image = await loadImage(coverImg);
      context.drawImage(image, 0, 0);
    } else {
      context.fillStyle = coverColor;
      context.fillRect(0, 0, canvas.width, canvas.height);
    }
    context.globalCompositeOperation = "destination-out";

    // bind event
    canvas.addEventListener("mousedown", scratchController.bind(null, true));
    canvas.addEventListener("touchstart", scratchController.bind(null, true));

    canvas.addEventListener("mousemove", handleScratch);
    canvas.addEventListener("touchmove", handleScratch as () => void);

    canvas.addEventListener("mouseup", scratchController.bind(null, false));
    canvas.addEventListener("touchend", scratchController.bind(null, false));

    setInitDone(true);
  };

  const terminateCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.removeEventListener("mousedown", scratchController.bind(null, true));
    canvas.removeEventListener(
      "touchstart",
      scratchController.bind(null, true)
    );

    canvas.removeEventListener("mousemove", handleScratch);
    canvas.removeEventListener("touchmove", handleScratch as () => void);

    canvas.removeEventListener("mouseup", scratchController.bind(null, false));
    canvas.removeEventListener("touchend", scratchController.bind(null, false));
  };
  const handleScratch = (e: MouseEvent) => {
    if (!isScratching.current) return;
    e.preventDefault();

    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    const canvasRect = canvas.getClientRects()[0];

    const x = e.clientX - canvasRect.x;
    const y = e.clientY - canvasRect.y;

    context.beginPath();
    context.arc(x, y, 20, 0, Math.PI * 2);
    context.fill();
  };
  const scratchController = (scratching: boolean) => {
    isScratching.current = scratching;
  };

  return [isScratching.current, initDone];
};

export { useCanvasInit };
