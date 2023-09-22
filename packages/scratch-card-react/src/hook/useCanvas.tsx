import { useEffect, useRef } from "react";

const useCanvasInit = (props: any) => {
  const { canvasRef, width, height, coverColor } = props;
  const isScratching = useRef(false); // 是否正在刮

  useEffect(() => {
    initCanvas();
    return () => {
      terminateCanvas();
    };
  }, []);

  const initCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = width;
    canvas.height = height;

    const context = canvas?.getContext("2d");
    if (!context) return;

    if (props.coverImg) {
      const img = new Image();
      img.src = props.coverImg;
      img.onload = () => {
        console.log(img, "img");

        context.drawImage(img, 0, 0);
        context.globalCompositeOperation = "destination-out";
      };
    } else {
      context.fillStyle = coverColor;
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.globalCompositeOperation = "destination-out";
    }

    // bind event
    canvas.addEventListener("mousedown", scratchController.bind(null, true));
    canvas.addEventListener("touchstart", scratchController.bind(null, true));

    canvas.addEventListener("mousemove", handleScratch);
    canvas.addEventListener("touchmove", handleScratch as any);

    canvas.addEventListener("mouseup", scratchController.bind(null, false));
    canvas.addEventListener("touchend", scratchController.bind(null, false));
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
    canvas.removeEventListener("touchmove", handleScratch as any);

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
    const x = e instanceof MouseEvent ? e.pageX - canvasRect.x : 0;
    const y = e instanceof MouseEvent ? e.pageY - canvasRect.y : 0;

    context.beginPath();
    context.arc(x, y, 20, 0, Math.PI * 2);
    context.fill();
  };
  const scratchController = (scratching: boolean) => {
    isScratching.current = scratching;
  };

  return [isScratching.current];
};

export { useCanvasInit };
