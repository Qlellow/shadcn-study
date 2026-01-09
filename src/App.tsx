import { Toaster } from '@/components/ui/sonner';
import { ThemeProvider } from '@/contexts/ThemeProvider';
import AppRouter from '@/routes/AppRouter';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="antialiased">
        <Toaster position="top-center" />
        <AppRouter />
      </div>
    </ThemeProvider>
  );
}

export default App;
