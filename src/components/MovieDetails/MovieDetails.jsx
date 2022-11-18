import { moviesDetails } from '../Services/Api';
import {Loader } from '../Loader/Loader';
import { useState, useEffect, Suspense } from 'react';
import { useParams } from 'react-router';
import {Outlet, useLocation, useNavigate} from 'react-router-dom';
import { Button, Link, StyledDiv, Thumb, StyletTitle, StyletDiv, StyledImg, ThumbTitle, StyledGetYear, StyledP } from './MovieDetails.styled';


export const MovieDetailsPage = () => {

    const [movie, setMovie] = useState({});
    const [isLoading, setIsLoading] = useState(false)


const { movieId } = useParams();
   
 useEffect(() => {
    
        const fetchMovieDetails = async () => {
        
            try {
                setIsLoading(true);
                const results = await moviesDetails( movieId);
                setMovie(results);
                setIsLoading(false)
                
            } catch (error) {
                console.log(error)
                console.error('Smth wrong with homepage trends fetch');
               
            }
        }
        fetchMovieDetails();
 }, [movieId]);
    
    /*Функция возврата для кнопки*/
   
    const location = useLocation();
    const navigate = useNavigate();

    const cameBack = () => navigate(location.state?.from ?? '/movies');
  

    /*Функция даті релиза фильма*/
    const getYear = () => new Date(movie.release_date).getFullYear();
 
    const { poster_path, vote_average, genres } = movie;
    
    
    const path = 'https://image.tmdb.org/t/p/w342'
    const url = `${path}${poster_path}`
    
    
    return (

        
        <>
            
            {isLoading && <Loader />}
            
        < Button onClick={ cameBack }>
          Go back
        </Button>
       <Thumb> 
            <StyletDiv>
                <StyledImg
                    src={ url }
                    alt={movie.title}
                />
            </StyletDiv>
            <div>
            <ThumbTitle>
                <StyletTitle>{movie.title}</StyletTitle>
                <StyledGetYear>({getYear()})</StyledGetYear>
            </ThumbTitle>
                <p>User Score {Math.floor(vote_average * 10)}%</p>
                
                <div className="movie_overview">
                    <h3>Overview</h3>
                    <p>{movie.overview}</p>
                </div>
                
                    <h3>Genres</h3>
                    
                    {genres && <div>{genres.map(element => (
                    <span key={element.id}> {element.name}</span>))}</div>}
            </div>
        </Thumb> 
            <hr />
            <h2>Additional Information</h2>

          <StyledDiv> 
               
                <Link
                    to="cast" state={location.state}>
                <StyledP>Cast</StyledP>     
                </Link>
                
            
                <Link
                to="reviews" state={location.state}>
                <StyledP>Reviews</StyledP>
                </Link>
              
                
         </StyledDiv> 
            
            <hr />
            <Suspense fallback={null}>
				<Outlet context={{ movieId }} />
			</Suspense>

        
        </>
    )

}