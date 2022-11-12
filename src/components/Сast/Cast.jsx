import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from '../Services/Api';
import { CastList } from './Cast.styled';
import {Loader } from '../Loader/Loader';


export const Cast = () => {
    const [cast, setCast] = useState([]);
    const { movieId } = useParams();
    const [isLoading, setIsLoading] = useState(false)

     useEffect(() => {
    
        const fetchCastId = async () => {
        
            try {
                setIsLoading(true);
                const results = await fetchCast( movieId);
                setCast(results.cast);
                 setIsLoading(false)
                console.log(results);
            } catch (error) {
                console.log(error)
                console.error('Smth wrong with homepage trends fetch');
               
            }
        }
        fetchCastId();
     }, [movieId]);
    
    
    return (
        <>
             {isLoading && <Loader />} 
            <CastList>
            {cast.map(({ cast_id, name, profile_path, character }) => (
                 
					<li key={cast_id}>
						<img src={`https://image.tmdb.org/t/p/w200${profile_path}`} alt="" />
					
					  <p>Name: {name}</p>
                      <p>Character: {character}</p>
                    
					</li>))}	
			</CastList>	
        </>
    )
}