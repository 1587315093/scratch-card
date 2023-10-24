import type { FC, ReactNode } from 'react';
import { ScratchCard } from 'scratch-card-react';

const DemoBlock: FC<{ children: ReactNode; title: string }> = (props) => {
  return (
    <div style={{ marginTop: 20 }}>
      <p>{props.title}</p>
      {props.children}
    </div>
  );
};

const ChildrenElement = () => (
  <div
    style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <span>恭喜您，刮中了法拉利5元代金劵</span>
  </div>
);

export default () => {
  return (
    <div>
      <DemoBlock title="基本展示，会有默认宽高和颜色">
        <ScratchCard />
      </DemoBlock>
      <DemoBlock title="设置宽高和黄色蒙版与底部元素">
        <ScratchCard
          classNames={{
            root: 'customize-root',
            mask: 'customize-mask',
            body: 'customize-body',
          }}
          width={260}
          height={180}
          coverColor="yellow"
        >
          <ChildrenElement />
        </ScratchCard>
      </DemoBlock>
      <DemoBlock title="设置蒙版为图片">
        <ScratchCard
          width={260}
          height={180}
          coverImg={import('../../assets/react.jpeg')}
        >
          <ChildrenElement />
        </ScratchCard>
      </DemoBlock>
    </div>
  );
};
