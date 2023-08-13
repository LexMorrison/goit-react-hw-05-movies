import { fetchData } from 'REST API/api-service';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from 'components/Loader/Loader';

const Reviews = () => {
  const [review, setReview] = useState([]);
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    const commentsData = async () => {
      try {
        const responce = await fetchData(`/movie/${movieId}/reviews`, 0);
        setReview(responce.data.results);
      } catch {
        setError('error');
      } finally {
        setIsLoading(false);
      }
    };
    commentsData();
  }, [movieId]);
  return (
    <div>
      {isLoading && <Loader />}
      {error && <p>Oops, something went wrong!</p>}
      {review.length > 0 ? <h3>Reviews</h3> : <h3>No reviews!</h3>}
      {review && (
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
