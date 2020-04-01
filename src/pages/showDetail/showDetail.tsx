import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IShowItem } from '../../types';
import { PageContainer, Heading } from '../../components';
import { RowContainer, ColumnContainer, Image } from './styles';

interface IProps {
  showItems: Array<IShowItem>;
}

export const ShowDetail: React.FC<IProps> = ({ showItems }) => {
  const [cast, setCast] = useState([]);

  let { movieId } = useParams();

  const showItem = showItems.filter((s: IShowItem) => s.show.id === Number(movieId))[0];

  const id = showItem && showItem.show.id;

  const summary = showItem && showItem.show.summary;

  const name = showItem && showItem.show.name;

  const image = showItem && showItem.show.image && showItem.show.image.original;

  console.log(name, summary);
  useEffect(() => {
    const fetchSearchInput = () => {
      fetch(`http://api.tvmaze.com/shows/${id}/cast`, {
        method: 'GET',
      })
        .then(async (result: any) => {
          const cast = await result.json();
          console.log(cast);
          setCast(cast);
        })
        .catch(err => {
          console.log(err);
        });
    };

    fetchSearchInput();
  }, [id]);

  function stripHtml(summary: any) {
    // Create a new div element
    var temporalDivElement = document.createElement('div');
    // Set the HTML content with the providen
    temporalDivElement.innerHTML = summary;
    // Retrieve the text property of the element (cross-browser support)
    return temporalDivElement.textContent || temporalDivElement.innerText || '';
  }

  const summaryToText = stripHtml(summary);

  return (
    <PageContainer>
      <RowContainer>
        <ColumnContainer>
          <Image src={image} />
          <Heading>Cast</Heading>
          {cast.map(({ person }: any) => (
            <span>{person.name}</span>
          ))}
        </ColumnContainer>
        <ColumnContainer>
          <Heading>{name}</Heading>
          {summaryToText}
        </ColumnContainer>
      </RowContainer>
    </PageContainer>
  );
};
