import { useMemo } from 'react';
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
    <header className="w-full h-auto flex flex-row items-center justify-between px-4 sm:px-6 md:px-12 py-4 md:py-6 border-b border-border bg-background">
      <div className="w-full flex items-center justify-center">
        {componentInfo && typeof componentInfo === 'object' && 'name' in componentInfo && (
          <div className="text-primary text-xs sm:text-sm font-medium flex flex-col gap-1 items-center">
            <div className="flex items-center max-w-fit gap-2 bg-primary/10 dark:bg-primary/10 px-2 sm:px-3 py-1 sm:py-1.5 rounded-md">
              <componentInfo.icon className="size-3 sm:size-4" />
              <span className="text-xs sm:text-sm font-medium">{componentInfo.name}</span>
            </div>
            <span className="text-xs sm:text-sm text-muted-foreground text-center px-2">
              {componentInfo.description}
            </span>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
