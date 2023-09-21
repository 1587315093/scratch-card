import type { FC, PropsWithChildren } from "react";

type DemoBlockProps = FC<
  PropsWithChildren<{
    title: string;
  }>
>;

const DemoBlock: DemoBlockProps = (props) => {
  return (
    <div style={{ marginBottom: 20 }}>
      <h3 style={{ marginBottom: 10 }}>{props.title}</h3>
      {props.children}
    </div>
  );
};

export * from "./demo1";
export * from "./demo2";
export default DemoBlock;
