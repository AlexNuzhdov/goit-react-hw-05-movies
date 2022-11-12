import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from '../Services/Api';
// import { useOutletContext } from "react-router-dom";
// export const Reviews = () => {

//     const [reviews, setReviews] = useState([]);
//     const { movieId } = useParams();

//     useEffect(() => {
    
//         const getMovieReview = async () => {
        
//             try {
//                 const results = await fetchReviews(movieId);
//                 setReviews(results.results);
//                 console.log(results);
//             } catch (error) {
//                 console.log(error)
//                 console.error('Smth wrong with homepage trends fetch');
               
//             }
//         }
//         getMovieReview();
//     }, [movieId]);


//     return (
//         <div>
//             {reviews.map(({ id, author, content } ) => {

                
//                 <li key={id}>
                        
//                     <p>Author: {author}</p>
//                     <p>Content: {content}</p>
						
// 			    </li>
                
//             })}	
           
//         </div>
//     )
// }
export const Reviews = () => {

	const [contentRewiews, setContentRewiews] = useState([])
	const { movieId } = useParams();

	useEffect(() => {
		const url = `movie/${movieId}/reviews`
		async function fetchMovie() {
			try {
				const reviews = await fetchReviews(url);
				if (reviews.results.length) {
					const contentRewiews = reviews.results.map(({ author, content }) => {
						return { author, content };
					});
					setContentRewiews(contentRewiews)
				} else {
					setContentRewiews([])
				}
				return;
			} catch (error) {
				console.log(error)
			}
		}
		fetchMovie()
	}, [movieId])

	if (!contentRewiews) {
		return;
	}

	return (
		<div>
			{contentRewiews.length ?
				contentRewiews.map((el, index) => (
					<ul key={index}>
						<li><h3>Author: {el.author}</h3></li>
						<br />
						<p>
							{el.content}
						</p>
					</ul>
				)) :
				(<p>We don't have any reviews for this movie</p>)
			}
		</div>
	);
};
