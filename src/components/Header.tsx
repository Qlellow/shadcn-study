import { memo, useMemo } from 'react';
import { useLocation } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { componentsData } from '@/pages/components/components-data';
import { useTheme } from '@/contexts/ThemeProvider';

import { Moon, Sun } from 'lucide-react';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const isDark = theme === 'dark';

  // 현재 페이지 이름 가져오기
  const componentInfo = useMemo(() => {
    if (location.pathname === '/') return null;

    // components-data에서 경로로 찾기
    const component = componentsData.find(comp => comp.path === location.pathname);
    if (component) return component;

    // 직접 매핑 (components 페이지 등)
    const pathMap: Record<string, string> = {};

    return pathMap[location.pathname] || null;
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
      <Button
        variant="sidebar"
        size="icon"
        onClick={toggleTheme}
        className="absolute top-6 right-10 z-10"
      >
        {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
      </Button>
    </header>
  );
};

export default memo(Header);
