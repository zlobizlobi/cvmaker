import React from 'react';
import { useParams } from 'react-router-dom';
import { PageContainer, Heading } from '../../components';
import { RowContainer, ColumnContainer, Button, Image } from './styles';
import { useShow, useCast } from '../../hooks';
import { IPerson } from '../../types';
import { stripHtml } from '../../helpers';
import placeHolderImg from '../../images/placeholder-image.png';

export const ShowDetail: React.FC = () => {
  const { showId } = useParams();

  const cast = useCast(showId);

  const { name, image, summary } = useShow(showId);

  const summaryToString = stripHtml(summary);

  return (
    <PageContainer>
      <RowContainer>
        <ColumnContainer>
          <Image src={image.original || placeHolderImg} />
          <Heading>Cast</Heading>
          {cast.map(({ person }: IPerson) => (
            <span key={person.id}>{person.name}</span>
          ))}
        </ColumnContainer>
        <ColumnContainer>
          <Heading>{name}</Heading>
          <span>{summaryToString}</span>
          <Button to="/shows" role="button">
            Back to catalog
          </Button>
        </ColumnContainer>
      </RowContainer>
    </PageContainer>
  );
};
