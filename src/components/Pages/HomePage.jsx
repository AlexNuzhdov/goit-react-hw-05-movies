import { useState, useEffect } from 'react';
import { fetchTrends } from '../Services/Api';
import { MovieList } from '../MovieList/MovieList';
import {Loader } from '../Loader/Loader';

const HomePage = () => {
    const [trends, setTrends] = useState([]);
    // const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
    console.log('текст')
        const fetchData = async () => {
        
            try {
                setIsLoading(true);
                const movies = await fetchTrends();
                setTrends(movies.results);
                setIsLoading(false)

            } catch (error) {
                console.log(error)
                console.error('Smth wrong with homepage trends fetch');
                // setError(error.message); 
                alert(error)
            }
        }
        fetchData();
    }, []);

  

    return (
    <>
        {isLoading && <Loader />}

        <div>

        <MovieList movies={trends}/>
        </div>
    </>
)


};

export default HomePage;