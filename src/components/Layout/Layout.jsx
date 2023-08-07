import { Suspense, lazy } from 'react';
import { Outlet } from 'react-router-dom';
const Navigation = lazy(() => import('../Navigation/Navigation'));
const Layout = () => {
  return (
    <Suspense>
      <Navigation />
      <main>
        <Outlet />
      </main>
    </Suspense>
  );
};

export default Layout;
