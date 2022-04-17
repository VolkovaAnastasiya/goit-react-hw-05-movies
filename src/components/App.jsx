import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

const HomePage = lazy(()=> import("view/HomePage" /* webpackChunkName: "home-page" */));
const Navigation  = lazy(() => import("./Navigation" /* webpackChunkName: "navigation" */));
const MoviesPage = lazy(()=> import("view/MoviesPage" /* webpackChunkName: "movies-page" */));
const MovieDetalisPage = lazy(()=>import("view/MovieDetalisPage" /* webpackChunkName: "movie-detalis-page" */));
const Cast = lazy(()=>import('./Cast' /* webpackChunkName: "cast" */));
const Reviews = lazy(()=>import('./Reviews' /* webpackChunkName: "reviews" */));


export const App = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:id" element={<MovieDetalisPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
  </Suspense>
     
      
     
    </div>
  );
};
