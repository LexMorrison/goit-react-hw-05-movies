import { fetchData } from 'REST API/api-service';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import Loader from 'components/Loader/Loader';
import {
  ActorList,
  ActorItem,
  ActorImg,
  ActorName,
  ActorVoice,
} from './Cast.styled';

const Cast = ({ imgPost }) => {
  const [actors, setActors] = useState([]);
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetchData(`/movie/${movieId}/credits`, 0).then(responce => {
      if (responce.status !== 200) {
        setIsLoading(false);
        throw new Error('Something went wrong!');
      } else {
        setActors(responce.data.cast);
        setIsLoading(false);
      }
    });
  }, [movieId]);
  return (
    <div>
      {isLoading && <Loader />}
      {actors.length === 0 ? <h3>No cast!</h3> : <h3>Cast</h3>}
      {actors.length && (
        <ActorList>
          {actors.map(({ character, id, name, profile_path }) => (
            <ActorItem key={id}>
              <ActorImg src={imgPost + profile_path} alt={name} />
              <ActorName>Actor's name: {name}</ActorName>
              <ActorVoice>{character}</ActorVoice>
            </ActorItem>
          ))}
        </ActorList>
      )}
    </div>
  );
};
export default Cast;

Cast.propTypes = {
  imgPost: PropTypes.string.isRequired,
};
