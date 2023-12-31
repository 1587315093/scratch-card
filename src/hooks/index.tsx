import type { MutableRefObject } from 'react';
import { useEffect, useRef, useState } from 'react';
import type { ScratchCardType } from '../scratch-card';
import { loadImage, loadImageUrl } from '../utils';

type ScratchCardHookProps = Required<
  ScratchCardType & {
    canvasRef: MutableRefObject<HTMLCanvasElement | null>;
  }
> & {
  coverImg?: string | Promise<any>;
  callbackInfo?: {
    calllback?: () => void;
    ratio?: number;
  };
};

const useCardInit = (props: ScratchCardHookProps) => {
  const { canvasRef, width, height, coverColor, coverImg, callbackInfo } =
    props;
  const isScratching = useRef(false);
  const [initDone, setInitDone] = useState(false); // 网络图片加载有延迟，初始化完成在渲染底层dom

  useEffect(() => {
    initCard();
    return () => {
      destroyCard();
    };
  }, []);

  const initCard = async () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = width;
    canvas.height = height;

    const context = canvas?.getContext('2d');
    if (!context) return;

    if (coverImg) {
      const url = await loadImageUrl(coverImg);
      const image = await loadImage(url);
      context.drawImage(image, 0, 0, width, height);
    } else {
      context.fillStyle = coverColor;
      context.fillRect(0, 0, canvas.width, canvas.height);
    }
    context.globalCompositeOperation = 'destination-out';

    // bind event
    canvas.addEventListener('mousedown', scratchController.bind(null, true));
    canvas.addEventListener('touchstart', scratchController.bind(null, true));

    canvas.addEventListener('mousemove', handleScratch);
    canvas.addEventListener('touchmove', handleScratch as () => void);

    canvas.addEventListener('mouseup', scratchController.bind(null, false));
    canvas.addEventListener('touchend', scratchController.bind(null, false));

    setInitDone(true);
  };

  const destroyCard = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.removeEventListener('mousedown', scratchController.bind(null, true));
    canvas.removeEventListener(
      'touchstart',
      scratchController.bind(null, true),
    );

    canvas.removeEventListener('mousemove', handleScratch);
    canvas.removeEventListener('touchmove', handleScratch as () => void);

    canvas.removeEventListener('mouseup', scratchController.bind(null, false));
    canvas.removeEventListener('touchend', scratchController.bind(null, false));
  };

  const clearCard = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext('2d');
    if (!context) return;

    context.clearRect(0, 0, width, height);
    destroyCard();
  };

  const handleScratch = (e: MouseEvent) => {
    if (!isScratching.current) return;
    e.preventDefault();

    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext('2d');
    if (!context) return;

    const canvasRect = canvas.getClientRects()[0];

    const x = e.clientX - canvasRect.x;
    const y = e.clientY - canvasRect.y;

    context.beginPath();
    context.arc(x, y, 20, 0, Math.PI * 2);
    context.fill();

    typeof callbackInfo?.calllback === 'function' && calcCardArea(context);
  };

  const calcCardArea = (context: CanvasRenderingContext2D) => {
    const cardPixels = context.getImageData(0, 0, width, height);
    const scratchPixels = [];

    for (let i = 0; i < cardPixels.data.length; i++) {
      const item = cardPixels.data[i + 3];
      item === 0 && scratchPixels.push(item);
    }

    if (
      scratchPixels.length / cardPixels.data.length >
      (callbackInfo?.ratio || 0.8)
    ) {
      callbackInfo?.calllback?.();
    }
  };

  const scratchController = (scratching: boolean) => {
    isScratching.current = scratching;
  };

  return [isScratching.current, initDone, clearCard] as const;
};

export { useCardInit };
export default useCardInit;
