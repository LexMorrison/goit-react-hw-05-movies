import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const MovieGallery = styled.ul`
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 25px;
`;

export const ImgPoster = styled.img`
  width: 300px;
  height: 450px;
  border-bottom: 2px solid black;

  transition: transform 0.3s ease-in-out;
  &:hover {
    border: 2px solid black;
    border-radius: 2px;
    transform: scale(1.1);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
`;

export const Linkk = styled(Link)`
  text-decoration: none;
  color: white;
`;

export const MovieItem = styled.li`
  max-width: 300px;
  border: 2px solid;
  border-radius: 2px;
  background-color: gray;
`;

export const Description = styled.p`
  font-size: 20px;

  text-align: center;
`;
