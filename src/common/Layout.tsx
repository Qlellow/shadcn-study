import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/sidebar/app-sidebar';
import type { LayoutProps } from '@/global/types';

import Header from '@/components/Header';
import { useLocation } from 'react-router-dom';
import ModeToggle from '@/pages/components/ModeToggle';
import { useEffect } from 'react';

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isComponents = location.pathname === '/components';

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
        <main className="w-full flex min-h-svh flex-col items-center gap-6 bg-background text-foreground">
          {!isHome && !isComponents && <Header />}
          {children}
        </main>
        <div className="absolute top-4 right-4 md:top-6 md:right-10 z-10">
          <ModeToggle />
        </div>
      </SidebarProvider>
    </>
  );
};

export default Layout;
