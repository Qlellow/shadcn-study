import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/sidebar/app-sidebar';
import type { LayoutProps } from '@/global/types';

import Header from '@/components/Header';
import { useLocation } from 'react-router-dom';

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <main className="w-full flex min-h-svh flex-col items-center gap-6">
          {!isHome && <Header />}
          {children}
        </main>
      </SidebarProvider>
    </>
  );
};

export default Layout;
