import { useRef } from 'react';
import { ScratchCard } from 'scratch-card-react';
import type { ScratchCardRef } from 'scratch-card-react/scratch-card';
import { ChildrenElement, DemoBlock } from './DemoCop';

const src =
  'https://images.unsplash.com/photo-1620476214170-1d8080f65cdb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3150&q=80';

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
            ratio: 0.8,
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
          width={300}
          height={200}
          coverImg={src}
          callbackInfo={{
            ratio: 0.8,
            calllback: () => {
              alert('scratch done');
            },
          }}
        >
          <ChildrenElement style={{ backgroundColor: 'red' }} />
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
