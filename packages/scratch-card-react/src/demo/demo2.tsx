import DemoBlock from ".";
import ScratchCard from "../components/scratch-card";

function Demo2() {
  return (
    <DemoBlock title="demo2 自定义底部节点 大小与颜色">
      <ScratchCard width={260} height={160} BackgroundColor="blue">
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>恭喜中奖</h1>
        </div>
      </ScratchCard>
    </DemoBlock>
  );
}

export { Demo2 };
