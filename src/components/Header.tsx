import { memo, useMemo } from 'react';
import { useLocation } from 'react-router-dom';

import { componentsData } from '@/pages/components/components-data';
const Header = () => {
  const location = useLocation();

  // 현재 페이지 이름 가져오기
  const componentInfo = useMemo(() => {
    if (location.pathname === '/') return null;
    return componentsData.find(comp => comp.path === location.pathname);
  }, [location.pathname]);

  return (
    <header className="w-full h-25 flex flex-row items-center justify-between px-12 py-6 border-b border-gray-200 dark:border-gray-800">
      <div className="w-full flex items-center justify-center">
        {componentInfo && typeof componentInfo === 'object' && 'name' in componentInfo && (
          <div className="text-primary text-sm font-medium flex flex-col gap-1 items-center">
            <div className="p-6 flex items-center max-w-fit gap-2 bg-primary/2 dark:bg-primary/10 px-3 py-1.5 rounded-md">
              <componentInfo.icon className="size-4" />
              <span className="text-sm font-medium">{componentInfo.name}</span>
            </div>
            <span className="text-sm text-muted-foreground">{componentInfo.description}</span>
          </div>
        )}
      </div>
    </header>
  );
};

export default memo(Header);
