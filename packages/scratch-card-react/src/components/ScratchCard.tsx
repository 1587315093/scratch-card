import {} from "react";
import type { FC } from "react";
import { Log } from "@common/utils";

type ScratchCardProps = {};

const ScratchCard: FC<ScratchCardProps> = (props) => {
  return (
    <div>
      <canvas></canvas>
      <button
        onClick={() => {
          Log();
        }}
      >
        ----
      </button>
    </div>
  );
};

export default ScratchCard;
