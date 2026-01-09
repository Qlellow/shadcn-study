import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/sidebar/app-sidebar';
import type { LayoutProps } from '@/global/types';

import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeProvider';
import { useLocation } from 'react-router-dom';

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isComponents = location.pathname === '/components';

  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <main className="w-full flex min-h-svh flex-col items-center gap-6">
          {!isHome && !isComponents && <Header />}
          <Button
            variant="sidebar"
            size="icon"
            onClick={toggleTheme}
            className="absolute top-6 right-10 z-10"
          >
            {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </Button>
          {children}
        </main>
      </SidebarProvider>
    </>
  );
};

export default Layout;
