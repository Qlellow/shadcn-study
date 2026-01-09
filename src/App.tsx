import { Toaster } from '@/components/ui/sonner';
import { ThemeProvider } from '@/contexts/ThemeProvider';
import AppRouter from '@/routes/AppRouter';
import { useIsMobile } from '@/hooks/use-mobile';

function App() {
  const isMobile = useIsMobile();

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="antialiased">
        <Toaster position={isMobile ? 'bottom-center' : 'top-center'} />
        <AppRouter />
      </div>
    </ThemeProvider>
  );
}

export default App;
