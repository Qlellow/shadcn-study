import path from 'path';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // React와 React-DOM을 별도 청크로 분리
          if (id.includes('node_modules/react/') || id.includes('node_modules/react-dom/')) {
            return 'react-vendor';
          }

          // React Router를 별도 청크로 분리
          if (id.includes('node_modules/react-router')) {
            return 'router-vendor';
          }

          // TanStack Table을 별도 청크로 분리 (DataTable에서 사용)
          if (id.includes('node_modules/@tanstack/react-table')) {
            return 'table-vendor';
          }

          // React Markdown과 관련 패키지를 별도 청크로 분리
          if (
            id.includes('node_modules/react-markdown') ||
            id.includes('node_modules/remark-') ||
            id.includes('node_modules/rehype-')
          ) {
            return 'markdown-vendor';
          }

          // Radix UI 패키지들을 별도 청크로 분리
          if (id.includes('node_modules/@radix-ui')) {
            return 'radix-vendor';
          }

          // 아이콘 라이브러리들을 별도 청크로 분리
          if (
            id.includes('node_modules/lucide-react') ||
            id.includes('node_modules/@tabler/icons-react')
          ) {
            return 'icons-vendor';
          }

          // Vercel Analytics를 별도 청크로 분리
          if (id.includes('node_modules/@vercel/analytics')) {
            return 'analytics-vendor';
          }

          // 나머지 node_modules를 vendor 청크로 분리
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
  },
});
