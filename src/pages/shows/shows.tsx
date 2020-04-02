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

  let { path } = useRouteMatch();

  const shows = useShows(debouncedSearchValue);

  return (
    <>
      <Route exact path={path}>
        <PageContainer>
          <form action="">
            <SearchBar
              onChange={(e: ChangeEvent<HTMLInputElement>): void => setSearchValue(e.target.value)}
            />
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
