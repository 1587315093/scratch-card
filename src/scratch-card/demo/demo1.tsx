import { ScratchCard } from 'scratch-card-react';
import { ChildrenElement, DemoBlock } from './DemoCop';

const src =
  'https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=60';

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
        <ScratchCard width={300} height={200} coverImg={src}>
          <ChildrenElement />
        </ScratchCard>
      </DemoBlock>
    </div>
  );
};
