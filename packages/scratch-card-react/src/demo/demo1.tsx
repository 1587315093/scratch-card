import { useRef } from "react";
import DemoBlock from ".";
import ScratchCard from "../component/scratch-card";

function Demo1() {
  const canvasRef = useRef(null);

  return (
    <DemoBlock title="demo1 基础功能，不传会有默认颜色与大小">
      <ScratchCard ref={canvasRef}>
        <h1>6666</h1>
      </ScratchCard>
      <button onClick={() => console.log(canvasRef.current, "ref")} style={{border:'1px solid #ddd',margin:20,padding:10}}>
        点击在控制台输出ref功能
      </button>
    </DemoBlock>
  );
}

export { Demo1 };
