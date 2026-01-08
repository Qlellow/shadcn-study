import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type Theme = 'dark' | 'light';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
  defaultTheme?: Theme;
}

export function ThemeProvider({ children, defaultTheme = 'dark' }: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(() => {
    // HTML에서 이미 적용된 테마 클래스 확인 (FOUC 방지)
    const htmlClass = document.documentElement.classList;
    if (htmlClass.contains('dark')) {
      return 'dark';
    }
    if (htmlClass.contains('light')) {
      return 'light';
    }
    
    // localStorage에서 저장된 테마 읽기
    const stored = localStorage.getItem('theme') as Theme | null;
    if (stored && (stored === 'dark' || stored === 'light')) {
      return stored;
    }
    // 시스템 설정 확인
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return defaultTheme;
  });

  useEffect(() => {
    const root = document.documentElement;
    const bgColor = theme === 'dark' ? '#0a0a0a' : '#ffffff';
    
    // 테마 클래스 변경
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    
    // 배경색 즉시 업데이트 (transition 전에)
    root.style.backgroundColor = bgColor;
    if (document.body) {
      document.body.style.backgroundColor = bgColor;
    }
    
    // localStorage 저장
    localStorage.setItem('theme', theme);
    
    // 테마 로드 완료 표시 (CSS transition 활성화)
    if (!root.classList.contains('theme-loaded')) {
      root.classList.add('theme-loaded');
    }
  }, [theme]);

  const toggleTheme = () => {
    setThemeState(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

