import React from 'react';
import { IShowItem } from '../../types';
import { Container, Image, RowContainer, Row, Highlight, Button } from './styles';
import placeholderImg from '../../images/placeholder-image.png';
import { useRouteMatch } from 'react-router-dom';

interface IProps {
  showItem: IShowItem;
}

export const ShowItem: React.FC<IProps> = ({ showItem }) => {
  const {
    show: { name, genres, image, id },
  } = showItem;

  const imgSrc = image && image.original;

  const splittedGenres = genres.join(', ');

  const { url } = useRouteMatch();

  return (
    <>
      <Container>
        <Image src={imgSrc || placeholderImg} />
        <RowContainer>
          <div>
            <Row>
              <Highlight>Title:</Highlight>
              <span>{name}</span>
            </Row>
            <Row>
              <Highlight>Genres:</Highlight>
              <span>{splittedGenres}</span>
            </Row>
          </div>
          <Button to={`${url}/${id}`}>See details</Button>
        </RowContainer>
      </Container>
    </>
  );
};
