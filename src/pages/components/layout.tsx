import type { LayoutProps } from '@/global/types';
import { Children } from 'react';

const ComponentsLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col gap-2 justify-center items-center">
      {Children.map(children, child => {
        return <div className="flex flex-col gap-2">{child}</div>;
      })}
    </div>
  );
};

export default ComponentsLayout;
