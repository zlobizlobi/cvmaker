import React, { useState, useEffect, ChangeEvent } from 'react';
import { SearchBar, ShowItem } from '../../components';
import { useDebounce } from '../../hooks';
import { PageContainer, ShowItemContainer } from './styles';
import { IShowItem } from '../../types';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { ShowDetail } from '../showDetail';

export const Shows = () => {
  const [searchValue, setSearchValue] = useState<string>('');

  const [showItems, setShowItems] = useState<Array<IShowItem>>([]);

  const debouncedSearchValue = useDebounce(searchValue, 500);

  let { path, url } = useRouteMatch();

  useEffect(() => {
    const fetchSearchInput = () => {
      fetch(`http://api.tvmaze.com/search/shows?q=${debouncedSearchValue}`, {
        method: 'GET',
      })
        .then(async (result: any) => {
          const parsedResults = await result.json();
          setShowItems(parsedResults);
        })
        .catch(err => {
          console.log(err);
        });
    };

    fetchSearchInput();
  }, [debouncedSearchValue]);

  return (
    <Switch>
      <Route exact path={path}>
        <PageContainer>
          <form action="">
            <SearchBar
              onChange={(e: ChangeEvent<HTMLInputElement>): void => setSearchValue(e.target.value)}
            />
          </form>
          {!showItems.length && <span>Oops, no results "yet"</span>}
          <ShowItemContainer>
            {showItems.map((showItem: IShowItem) => (
              <>
                <ShowItem showItem={showItem} url={url} />
              </>
            ))}
          </ShowItemContainer>
        </PageContainer>
      </Route>
      <Route path={`${url}/:movieId`} render={() => <ShowDetail />} />
    </Switch>
  );
};
