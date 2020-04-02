import { useEffect, useState } from 'react';
import { IShowItem } from '../types';

export const useShows = (debouncedSearchValue: string): IShowItem[] => {
  const [shows, setShows] = useState<IShowItem[]>([]);

  useEffect(() => {
    const fetchSearchInput = async () => {
      try {
        const shows = await fetch(`http://api.tvmaze.com/search/shows?q=${debouncedSearchValue}`, {
          method: 'GET',
        });
        const parsedShows = await shows.json();
        setShows(parsedShows);
      } catch (err) {
        console.log(err);
      }
    };
    fetchSearchInput();
  }, [debouncedSearchValue]);

  return shows;
};
