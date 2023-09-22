import type { FC, PropsWithChildren, MutableRefObject } from "react";

type ScratchCardType = {
  coverColor: string;
  width: number;
  height: number;
};

type ScratchCardProps = FC<
  PropsWithChildren<
    Partial<ScratchCardType> & {
      coverImg?: string;
    }
  >
>;
type ScratchCardHookProps = Required<
  ScratchCardType & {
    canvasRef: MutableRefObject<HTMLCanvasElement | null>;
  }
> & {
  coverImg?: string;
};
