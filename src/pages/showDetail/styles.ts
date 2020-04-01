import styled from 'styled-components';

export const RowContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  &:last-child {
    align-items: flex-start;
    margin-left: 30px;
  }
`;

export const Image = styled.img`
  width: 250px;
  height: auto;
  object-fit: cover;
  margin-bottom: 20px;
`;
