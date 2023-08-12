import { fetchData } from 'REST API/api-service';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Loader from 'components/Loader/Loader';
import {
  ActorList,
  ActorItem,
  ActorImg,
  ActorName,
  ActorVoice,
} from './Cast.styled';

const Cast = () => {
  const [actors, setActors] = useState([]);
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const BASE_URL_IMG = 'https://image.tmdb.org/t/p/w500/';
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  useEffect(() => {
    setIsLoading(true);
    const getActor = async () => {
      try {
        const responce = await fetchData(`/movie/${movieId}/credits`, 0);
        setActors(responce.data.cast);
      } catch {
        setError('error');
      } finally {
        setIsLoading(false);
      }
    };
    getActor();
  }, [movieId]);
  return (
    <div>
      {isLoading && <Loader />}
      {error && <p>Oops, something went wrong!</p>}
      {actors.length === 0 ? <h3>No cast!</h3> : <h3>Cast</h3>}
      {actors.length && (
        <ActorList>
          {actors.map(({ character, id, name, profile_path }) => (
            <ActorItem key={id}>
              <ActorImg
                src={profile_path ? BASE_URL_IMG + profile_path : defaultImg}
                alt={name}
              />
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
