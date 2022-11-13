
import { AppBar } from './AppBar/AppBar';
// import { lazy } from 'react';
import { Home } from './Pages/Home';
import { Movies } from './Pages/Movies';
import { Route, Routes } from 'react-router-dom';
import { MovieDetailsPage } from './MovieDetails/MovieDetails';
import { Container } from './Container/Container.styled';
import { Cast } from './Сast/Cast';
import { Reviews } from './Reviews/Reviews';

// const Home = lazy(() => import('./Pages/Home'));
// const Movies = lazy(() => import('./Pages/Movies'));
// const MovieDetailsPage = lazy(() => import('./MovieDetails/MovieDetails'));
// const Cast = lazy(() => import('./Сast/Cast'));
// const Reviews = lazy(() => import('./Reviews/Reviews'));





export const App = () => {

  return (

    <Container>

      <AppBar />

      
      
        <Routes>
          
        <Route index element={<Home />}></Route> 
        <Route path="/movies" element={<Movies />}></Route> 
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}> 
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>   
        
        <Route path="*" element={<Home />} />
        

      </Routes> 
      

    </Container>
  );
};