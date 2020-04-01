import styled from 'styled-components';
import { AnchorButton as AnchorButtonComponent } from '../../components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Heading = styled.h1`
  font-weight: 900;
  margin-bottom: 20px;
`;

export const Image = styled.img`
  max-height: 500px;
  max-width: 900px;
  object-fit: cover;
`;

export const AnchorButton = styled(AnchorButtonComponent)`
  && {
    align-self: center;
  }
`;
