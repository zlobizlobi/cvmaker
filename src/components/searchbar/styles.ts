import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid rgba(0, 0, 0, 0.4);
  margin: 50px 0;
`;

export const Label = styled.label`
  padding: 10px 0;
  font-size: 16px;
  font-weight: 900;
  text-transform: uppercase;
  align-self: flex-start;
`;

export const Input = styled.input.attrs({ type: 'text', name: 'search' })`
  padding: 7.5px 0;
  background-color: rgba(0, 0, 0, 0.6);
  color: rgba(255, 255, 255, 1);
  border: none;
  text-align: center;
  border-radius: 2px;
  box-shadow: 10px 10px 12px -5px rgba(0, 0, 0, 0.39);
  font-size: 23px;
`;
