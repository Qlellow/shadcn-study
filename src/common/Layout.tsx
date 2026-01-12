import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/sidebar/app-sidebar';
import type { LayoutProps } from '@/global/types';

import Header from '@/components/Header';
import { useLocation } from 'react-router-dom';
import ModeToggle from '@/pages/components/ModeToggle';
import { useEffect, useMemo } from 'react';
import { componentsData } from '@/pages/components/components-data';

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  // component 하위 페이지인지 확인 (componentsData에 있는 경로만)
  const isComponentPage = useMemo(() => {
    return componentsData.some(comp => comp.path === location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    // 라우트 변경 시 스크롤을 맨 위로
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [location.pathname]);

  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <main className="w-full flex min-h-svh flex-col items-center gap-6 bg-background text-foreground overflow-x-hidden">
          {/* 모바일 사이드바 트리거 버튼 */}
          <div className="fixed top-4 left-4 z-50 md:hidden">
            <SidebarTrigger />
          </div>
          {isComponentPage && (
            <>
              <Header />
              {/* Header가 고정되어 있으므로 공간 확보 */}
              <div className="w-full h-20 sm:h-24 md:h-28" />
            </>
          )}
          {children}
        </main>
        <div className="fixed top-4 right-4 md:top-6 md:right-10 z-50">
          <ModeToggle />
        </div>
      </SidebarProvider>
    </>
  );
};

export default Layout;
