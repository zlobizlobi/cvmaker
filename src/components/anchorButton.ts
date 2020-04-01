import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const AnchorButton = styled(Link)`
  background-color: white;
  border-radius: 2px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  padding: 7.5px 10px;
  transition: all 0.2s ease;
  cursor: pointer;
  color: #000;
  margin-top: 20px;

  :hover {
    background-color: #000;
    color: #fff;
  }

  text-transform: uppercase;
  text-decoration: none;
`;
