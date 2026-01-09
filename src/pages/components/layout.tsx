import type { LayoutProps } from '@/global/types';
import { Children } from 'react';

const ComponentsLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col gap-2 justify-center items-center w-full">
      {Children.map(children, child => {
        return <div className="flex flex-col gap-2 items-center w-full">{child}</div>;
      })}
    </div>
  );
};

export default ComponentsLayout;
