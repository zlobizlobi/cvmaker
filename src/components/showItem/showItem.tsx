import React from 'react';
import { IShowItem } from '../../types';
import { Container, Image, RowContainer, Row, Highlight, Button } from './styles';
import placeholderImg from '../../images/placeholder-image.png';

interface IProps {
  showItem: IShowItem;
  url: string;
}

export const ShowItem: React.FC<IProps> = ({ showItem, url }) => {
  const {
    show: { name, genres, image },
  } = showItem;

  const imgSrc = image && image.original;

  const splittedGenres = genres.join(', ');

  const slug = name
    .toLowerCase()
    .split(' ')
    .join('-');

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
          <Button to={`${url}/${slug}`}>See details</Button>
        </RowContainer>
      </Container>
    </>
  );
};
