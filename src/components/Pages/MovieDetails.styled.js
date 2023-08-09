import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  padding: 0 16px;
`;

export const Button = styled(Link)`
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #333;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
  margin-bottom: 10px;
  top: -25px;
  &:hover {
    background-color: #ddd;
    color: black;
  }
`;

export const PositionDiv = styled.div`
  display: flex;
  position: relative;
  top: -15px;
`;

export const TextPos = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FilmImg = styled.img`
  width: 300px;
  height: 450px;
  margin-right: 20px;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
`;

export const OverviewDescr = styled.p`
  max-width: 400px;
`;
