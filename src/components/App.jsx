import { Link } from 'react-router-dom'
import { AppBar } from './AppBar/AppBar';
import HomePage from './Pages/HomePage';
import { MoviesPage} from './Pages/MoviesPage';
import { Route, Routes } from 'react-router-dom';
import { MovieDetailsPage } from './MovieDetails/MovieDetails';
import { Container } from './Container/Container.styled';
import { Cast } from './Сast/Cast';
import {  Reviews } from './Reviews/Reviews';







export const App = () => {

  return (

    <Container>

      <AppBar />
     
      <Routes>
        
      <Route index element={<HomePage />}></Route> 
      <Route path="/movies" element={< MoviesPage />}></Route> 
      <Route path="/movies/:movieId/" element={<MovieDetailsPage />}></Route>
        <Route path="/movies/:movieId/cast" element={<Cast />} />
        <Route path="/movies/:movieId/reviews" element={<Reviews />} />
           
      

    </Routes> 
      

    </Container>
  );
};