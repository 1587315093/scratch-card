import type { CSSProperties, FC, ReactNode } from 'react';

const DemoBlock: FC<{ children: ReactNode; title: string }> = (props) => {
  return (
    <div style={{ marginTop: 20 }}>
      <p>{props.title}</p>
      {props.children}
    </div>
  );
};

const ChildrenElement: FC<{ style?: CSSProperties }> = (props) => (
  <div
    style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      ...props.style,
    }}
  >
    <span>恭喜您，刮中了法拉利5元代金劵</span>
  </div>
);

export { ChildrenElement, DemoBlock };
