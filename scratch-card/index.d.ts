import type { PropsWithChildren } from 'react';
import './index.less';
export type ScratchCardType = {
    coverColor: string;
    width: number;
    height: number;
};
export type ScratchCardProps = PropsWithChildren<Partial<ScratchCardType> & {
    coverImg?: string | Promise<any>;
    classNames?: {
        root?: string;
        mask?: string;
        body?: string;
    };
}>;
declare const ScratchCard: import("react").ForwardRefExoticComponent<Partial<ScratchCardType> & {
    coverImg?: string | Promise<any> | undefined;
    classNames?: {
        root?: string | undefined;
        mask?: string | undefined;
        body?: string | undefined;
    } | undefined;
} & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<unknown>>;
export default ScratchCard;
