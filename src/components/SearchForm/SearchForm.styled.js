import styled from '@emotion/styled';

export const SearchFormSt = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

export const InputTxt = styled.input`
  top: -30px;
  position: relative;
  padding: 10px;
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  margin-bottom: 10px;
`;

export const SearchButton = styled.button`
  position: relative;
  top: -25px;
  padding: 5px 10px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: black;
  }
`;
