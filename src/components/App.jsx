import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Layout = lazy(() => import('./Layout/Layout'));
const Home = lazy(() => import('./Pages/Home'));
const MovieDetails = lazy(() => import('./Pages/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const Movies = lazy(() => import('./Pages/Movies'));

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
        <Route path="movies/" element={<Movies imgPost={BASE_URL_IMG} />} />
        <Route
          path="/movies/:movieId"
          element={<MovieDetails imgPost={BASE_URL_IMG} />}
        >
          <Route path="cast" element={<Cast imgPost={BASE_URL_IMG} />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Home imgPost={BASE_URL_IMG} />} />
      </Route>
    </Routes>
  );
};
