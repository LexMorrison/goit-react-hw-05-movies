import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
const Layout = lazy(() => import('./Layout/Layout'));
const Home = lazy(() => import('./Pages/Home'));

export const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense>
            <Layout />
          </Suspense>
        }
      />
      <Route index element={<Home />} />
    </Routes>
  );
};
