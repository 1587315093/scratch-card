import type { MutableRefObject } from 'react';
import type { ScratchCardType } from '../scratch-card';
type ScratchCardHookProps = Required<ScratchCardType & {
    canvasRef: MutableRefObject<HTMLCanvasElement | null>;
}> & {
    coverImg?: string | Promise<any>;
};
declare const useCardInit: (props: ScratchCardHookProps) => boolean[];
export { useCardInit };
export default useCardInit;
