import styled from 'styled-components';
import { media } from '../../styles';
import { AnchorButton } from '../../components';

export const RowContainer = styled.div`
  display: flex;
  flex-direction: column;

  ${media.md(`
    flex-direction: row;
    justify-content: space-between;
  `)}
`;

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;

  &:first-child {
    margin: 0 0 30px 0;
  }

  ${media.md(`
    &:first-child {
        margin: 0 30px 0 0;
    }

 
  `)}
`;

export const Image = styled.img`
  width: 250px;
  height: auto;
  object-fit: cover;
  margin-bottom: 20px;
`;

export const Button = styled(AnchorButton).attrs({ to: '/shows', role: 'button' })`
  &&& {
    margin: 20px 0;
    display: inline-block;
  }
`;
