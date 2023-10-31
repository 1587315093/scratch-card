import { ScratchCard } from 'scratch-card-react';
import { ChildrenElement, DemoBlock } from './DemoCop';

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
          height={226}
          coverImg={
            'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
          }
        >
          <ChildrenElement />
        </ScratchCard>
      </DemoBlock>
    </div>
  );
};
