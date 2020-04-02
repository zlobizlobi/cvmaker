import React, { useState, ChangeEvent } from 'react';
import { SearchBar, ShowItem, PageContainer } from '../../components';
import { useDebounce, useShows } from '../../hooks';
import { ShowItemContainer } from './styles';
import { IShowItem } from '../../types';
import { Route, useRouteMatch } from 'react-router-dom';
import { ShowDetail } from '../showDetail';

export const Shows = () => {
  const [searchValue, setSearchValue] = useState<string>('');

  const debouncedSearchValue = useDebounce(searchValue, 500);

  const { path } = useRouteMatch();

  const shows = useShows(debouncedSearchValue);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(e.target.value);
  };

  return (
    <>
      <Route exact={true} path={path}>
        <PageContainer>
          <form action="">
            <SearchBar onChange={handleOnChange} />
          </form>
          {!shows.length && <span>Oops, no results "yet"</span>}
          <ShowItemContainer>
            {shows.map((showItem: IShowItem) => (
              <ShowItem showItem={showItem} key={showItem.show.id} />
            ))}
          </ShowItemContainer>
        </PageContainer>
      </Route>
      <Route path={`${path}/:showId`}>
        <ShowDetail />
      </Route>
    </>
  );
};
