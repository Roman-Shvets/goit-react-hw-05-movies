import styled from 'styled-components';

export const Input = styled.input`
  width: 320px;
  font-size: 24px;
  margin: 0 5px;
  border: solid 2px grey;
  padding-left: 10px;
`;
export const Button = styled.button`
  font-size: 24px;
  padding: 1px 10px;
  background-color: lightgrey;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  border: 1 px solid gray;
  cursor: pointer;
  transition: transform 250ms linear;
  outline: none;
  :hover {
    background-color: grey;
  }
  :active {
    box-shadow:none;
  }
`;