import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/sidebar/app-sidebar';
import type { LayoutProps } from '@/global/types';

import Header from '@/components/Header';
import { useLocation } from 'react-router-dom';
import ModeToggle from '@/pages/components/ModeToggle';

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isComponents = location.pathname === '/components';

  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <main className="w-full flex min-h-svh flex-col items-center gap-6 bg-background text-foreground">
          {!isHome && !isComponents && <Header />}
          {children}
        </main>
        <div className="absolute top-6 right-10 z-10">
          <ModeToggle />
        </div>
      </SidebarProvider>
    </>
  );
};

export default Layout;
