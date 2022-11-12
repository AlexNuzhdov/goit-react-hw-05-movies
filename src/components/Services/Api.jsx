import axios from 'axios';

const API_KEY = '1c6dcba834d944e3d18c668bd85be897';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const BASE_URL = axios.defaults.baseURL = 'https://api.themoviedb.org/3/';


/*Фетч трендов*/
 export const fetchTrends = async () => {
    try {
        
        const  response  = await axios.get(`trending/movie/day?api_key=${API_KEY}`);

        const trends = response.data;
        
        console.log(trends);
        return trends;
        

    } catch (error) {
        console.error('Smth wrong with fetch trends in api', error);
    }
};


// Фетч по поиску

export const fetcBySearch = async (query, page) => {
    try {

        const response = await axios.get(
            `search/movie?api_key=${API_KEY}&query=${query}&page=${page}&language=en-US`,
        );

        const results = response.data;

        return results;
    
    } catch (error) {
        console.error('Smth wrong with fetch movie search in api', error);
    }
};

/* Фетч по деталям фильма*/
export const moviesDetails = async id => {
  try {
    const { data } = await axios.get(
      `/movie/${id}?api_key=${API_KEY}&language=en-US`,
    );

    return data;
  } catch (error) {
    console.error('Smth wrong with fetch movie id in api', error);
  }
};

// Фетч актёров для фильма
export const fetchCast = async id => {
  try {
    const { data }  = await axios.get(
      `/movie/${id}/credits?api_key=${API_KEY}&language=en-US`,
    );

    return data;
  } catch (error) {
    console.error('Smth wrong with fetch cast in api', error);
  }
};

// Ревью
// export const fetchReviews = async id => {
//   try {
//     const { data }  = await axios.get(
//       `/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&`,
//     );

//     return data;
//   } catch (error) {
//     console.error('Smth wrong with fetch cast in api', error);
//   }
// };

export const fetchReviews = async (url) => {
	const response = await axios.get(`${BASE_URL}${url}`, {
		params: {
			api_key: `${API_KEY}`,
		}
	})
	return response.data;
};
