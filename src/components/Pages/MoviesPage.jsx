import { fetcBySearch } from '../Services/Api';
import { useState, useEffect } from 'react';
import { SearchFormInput, SearchButton, Form } from './MoviesPage/MoviesPage.styled';
import { Link } from "react-router-dom";
import {Loader } from '../Loader/Loader';


export const MoviesPage = () => {
const [page, setPage] = useState(1);
// const [movies, setMovies] = useState([]);
const [query, setQuery] = useState('');
    // const [error, setError] = useState('');
  const [foundMovies, setFoundMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false)


      // Наблюдает за инпутом и пишет значние в стейт
    
    const handleChange = e => {
        setQuery(e.currentTarget.value);
        console.log(setQuery);
    };
    //  Наблюдает за отправкой и отдает значение во внешний компонент
    const handleSubmit = e => {
        e.preventDefault();
         // Запрещает отправку пустого инпута
      if (query === '') {
         alert('Enter the film title');
        }
          // Отдать данные внешнему компоненту
        setQuery(query);
    
        reset();
    }
    
     const reset = () => {
      setQuery( '' );
  };
  

    
    

  useEffect(() => {
    if (!query) return;

    
        const getMovies = async () => {
       
          try {
                setIsLoading(true);
                const data = await fetcBySearch(query, page);
            //   setMovies(results);
                setIsLoading(false)
              const foundMovies = data.results.map(({ id, title
				}) => {
					return {
						id,
						title,
					};
				});
				if (foundMovies) {
					setFoundMovies(foundMovies);
				}
			} catch (error) {
				alert(error.massage)
			}
		}
        
        getMovies();
    }, [query]);
    

 
 




  return (
    <>
    <main>
     
      {isLoading && <Loader />} 
    
          </main>
           <Form onSubmit={handleSubmit}>
                <SearchFormInput
                    type="text"
                    name="query"
                    value={query}
                    autoComplete="off"
                    autoFocus
                    placeholder="Search movies"
                    onChange={handleChange}
                    
               
                />
                
                <SearchButton
                    type="submit"
                //   onClick={handleInputClear}
                //   className={s.searchButton}
                >
                    Search
                </SearchButton>
          </Form>
          <div>
				{foundMovies.map(({ id, title }) => (
					<ul key={id}>
						<Link to={`/movies/${id}`}>
							<li>{title}</li>
						</Link>
					</ul>
				))}
			</div>
     
      </>
      
  );
}
 
           