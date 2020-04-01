import styled from 'styled-components';
import { AnchorButton } from '../anchorButton';

export const Container = styled.div`
  display: inline-flex;
  padding: 15px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  width: 100%;
  max-width: 400px;
  flex-shrink: 0;
  margin: 10px;
`;

export const Image = styled.img.attrs({ loading: 'lazy', width: '130', height: '210' })``;

export const RowContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 10px;
  flex-grow: 1;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 10px;

  > span {
    font-size: 14px;
    line-height: 20px;
  }
`;

export const Highlight = styled.span`
  font-weight: 800;
`;

export const Button = styled(AnchorButton)`
  && {
    align-self: flex-end;
    font-size: 12px;
  }
`;
