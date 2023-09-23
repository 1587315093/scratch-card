import DemoBlock from ".";
import ScratchCard from "../components/scratch-card";
import { IMG_LIST } from "@common/constant";

function Demo3() {
  return (
    <DemoBlock title="demo3 网络图片蒙层">
      <ScratchCard width={800} height={533} coverImg={IMG_LIST[0]}>
        <h1>6666</h1>
      </ScratchCard>
    </DemoBlock>
  );
}

export { Demo3 };
