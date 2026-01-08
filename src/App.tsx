import { Toaster } from '@/components/ui/sonner';
import { ThemeProvider } from '@/contexts/ThemeProvider';
import AppRouter from '@/routes/AppRouter';

function App() {
  return (
    <ThemeProvider>
      <div>
        <Toaster position="top-center" />
        <AppRouter />
      </div>
    </ThemeProvider>
  );
}

export default App;
