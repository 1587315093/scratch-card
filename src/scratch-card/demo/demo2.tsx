import { useRef } from 'react';
import { ScratchCard } from 'scratch-card-react';
import type { ScratchCardRef } from 'scratch-card-react/scratch-card';
import { ChildrenElement, DemoBlock } from './DemoCop';

export default () => {
  const cardRef = useRef<ScratchCardRef>(null);

  return (
    <div>
      <DemoBlock title="刮开一定比例图层触发回调">
        <ScratchCard
          width={260}
          height={180}
          coverColor="skyblue"
          callbackInfo={{
            radio: 0.8,
            calllback: () => {
              alert('scratch done');
            },
          }}
        >
          <ChildrenElement />
        </ScratchCard>
      </DemoBlock>
      <DemoBlock title="完整功能，支持ref清除蒙层">
        <ScratchCard
          ref={cardRef}
          width={260}
          height={180}
          coverImg={import('../../assets/react.jpeg')}
          callbackInfo={{
            radio: 0.8,
            calllback: () => {
              alert('scratch done');
            },
          }}
        >
          <ChildrenElement />
        </ScratchCard>
        <button
          style={{
            marginTop: 10,
          }}
          onClick={() => {
            cardRef.current?.clearCard();
          }}
        >
          清除蒙层
        </button>
      </DemoBlock>
    </div>
  );
};
