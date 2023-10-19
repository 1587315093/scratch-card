import DemoBlock from ".";
import ScratchCard from "../component/scratch-card";

function Demo2() {
  return (
    <DemoBlock title="demo2 自定义底部节点 大小与颜色">
      <ScratchCard
        width={260}
        height={160}
        coverColor="blue"
        coverImg="https://puui.qpic.cn/vcover_vt_pic/0/mzc00200ron6ekx1677124235472/220?max_age=7776000"
      >
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
