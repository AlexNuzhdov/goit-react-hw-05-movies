// import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import { List, LinkTitle, Item, SectionTitle, Img } from './MovieList.styled';
import PropTypes from 'prop-types';

  const baseImgUrl = 'https://image.tmdb.org/t/p/w342/';
  const defaultImg = 'https://i.ibb.co/nw331jk/1.jpg';

export const MovieList = ({ movies}) => {
   
    const location = useLocation();

    return (
        <>
             <SectionTitle>Trending today</SectionTitle>
        <List>
            {movies.map(({ id, title, poster_path }) => {
          return (
            <Item key={id}>
              <LinkTitle state={{ from: location }} to={`/movies/${id}`}>
                <Img
                  src={poster_path ? `${baseImgUrl}${poster_path}` : defaultImg}
                  alt={title}
                />
                <h3>{title}</h3>
              </LinkTitle>
            </Item>
          );
        })}

      </List>
      </>
    );
}; 

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      poster_path: PropTypes.string,
    })
  ),
  sectionTitle: PropTypes.string,
};