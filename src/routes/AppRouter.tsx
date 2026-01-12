import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from '@/common/Layout';
import ScrollToTop from '@/components/ScrollToTop';
import { Spinner } from '@/components/ui/spinner';

// Lazy load pages for code splitting
const HomePage = lazy(() => import('@/pages/components/home/page'));
const ComponentsPage = lazy(() => import('@/pages/components/page'));
const SonnerPage = lazy(() => import('@/pages/components/sonner/page'));
const TablePage = lazy(() => import('@/pages/components/table/page'));
const ButtonPage = lazy(() => import('@/pages/components/button/page'));
const SkeletonPage = lazy(() => import('@/pages/components/skeleton/page'));
const ChangelogPage = lazy(() => import('@/pages/changelog/page'));

// Loading fallback component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <Spinner className="size-8" />
  </div>
);

const AppRouter = () => {
  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Layout children={<HomePage />} />} />
          <Route path="/components" element={<Layout children={<ComponentsPage />} />} />
          <Route path="/components/button" element={<Layout children={<ButtonPage />} />} />
          <Route path="/components/sonner" element={<Layout children={<SonnerPage />} />} />
          <Route path="/components/table" element={<Layout children={<TablePage />} />} />
          <Route path="/components/skeleton" element={<Layout children={<SkeletonPage />} />} />
          <Route path="/changelog" element={<Layout children={<ChangelogPage />} />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRouter;
