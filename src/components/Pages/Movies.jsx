import { fetcBySearch } from '../Services/Api';
import { useState, useEffect } from 'react';
import { SearchFormInput, SearchButton, Form } from '../MoviesPage/Movies.styled';
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";
import {Loader } from '../Loader/Loader';
import { useSearchParams } from 'react-router-dom';
import { MovieList } from '../MovieList/MovieList'
import { SearchForm } from '../SearchForm/SearchForm';

export const Movies = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const location = useLocation();

  const searchRequest = searchParams.get('query');


  useEffect(() => {

    if (!searchRequest) {
      return;
    }

    const fetchMovie = () => {

      setLoading(true);

      fetcBySearch(searchRequest)
        .then(results => {

          if (!results.length) {
            alert('No movies found!');
          }

          setMovies(results);
          console.log(results);
        })
        .catch(error => {
          setError('Ooops. Something went wrong...');
          console.log(error);
        })
        .finally(setLoading(false));
    };
    fetchMovie();
  }, [searchRequest]);

  
  function onSubmit(value) {
    // setSearchParams({ query: `${value}` });
    setSearchParams(value !== '' ? { query: value } : {});
  }
  // onSubmit();

  return (
    <>
      <div>
        
        
        {error && <div>{error}</div>}

        <SearchForm onSearch={onSubmit} />
        {movies && <MovieList movies={movies} />}
        
      </div>
    </>
  );
};

