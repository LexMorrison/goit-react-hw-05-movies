import { fetchData } from 'REST API/api-service';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from 'components/Loader/Loader';

const Reviews = () => {
  const [review, setReview] = useState([]);
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetchData(`/movie/${movieId}/reviews`, 0).then(responce => {
      if (responce.status !== 200) {
        setIsLoading(false);
        throw new Error('Something went wrong!');
      } else {
        setReview(responce.data.results);
        setIsLoading(false);
      }
    });
  }, [movieId]);
  return (
    <div>
      {isLoading && <Loader />}
      {review.length === 0 ? <h3>No reviews!</h3> : <h3>Reviews</h3>}
      {review.length && (
        <ul>
          {review.map(({ id, author, content }) => (
            <li key={id}>
              <h4>Author: {author}</h4>
              <p>Autor's review: {content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Reviews;
