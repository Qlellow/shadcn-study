import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from '@/common/Layout';
import HomePage from '@/pages/components/home/page';
import ComponentsPage from '@/pages/components/page';
import SonnerPage from '@/pages/components/sonner/page';
import TablePage from '@/pages/components/table/page';
import ButtonPage from '@/pages/components/button/page';
import SkeletonPage from '@/pages/components/skeleton/page';
const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout children={<HomePage />} />} />
        <Route path="/components" element={<Layout children={<ComponentsPage />} />} />
        <Route path="/components/button" element={<Layout children={<ButtonPage />} />} />
        <Route path="/components/sonner" element={<Layout children={<SonnerPage />} />} />
        <Route path="/components/table" element={<Layout children={<TablePage />} />} />
        <Route path="/components/skeleton" element={<Layout children={<SkeletonPage />} />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
