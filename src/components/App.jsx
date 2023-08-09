import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Layout = lazy(() => import('./Layout/Layout'));
const Home = lazy(() => import('./Pages/Home'));
const MovieDetails = lazy(() => import('./Pages/MovieDetails'));

export const App = () => {
  const BASE_URL_IMG = 'https://image.tmdb.org/t/p/w500/';
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense>
            <Layout />
          </Suspense>
        }
      >
        <Route index element={<Home imgPost={BASE_URL_IMG} />} />
        <Route
          path="/movies/:movieId"
          element={<MovieDetails imgPost={BASE_URL_IMG} />}
        />
      </Route>
    </Routes>
  );
};
