import { Link } from 'react-router-dom'

export const MovieList = ({ movies, prevLocation }) => {
    console.log(movies);
    return (
        <ul>
            <h2>Trending today</h2>
            {movies.map(({ id, title }) => (
                <li key={id}>
                     <Link to={`/movies/${id}`} >
                        <h3>{title}</h3>
                     </Link>
                </li>
                 
            ))}

          
             
        </ul>
    
    );
}; 

