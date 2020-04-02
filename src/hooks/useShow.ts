import { useEffect, useState } from 'react';
import { IShow } from '../types';

export const useShow = (showId: string | undefined): IShow => {
  const [show, setShow] = useState<IShow>({
    name: '',
    summary: '',
    id: 0,
    genres: [],
    image: { original: '' },
  });

  useEffect(() => {
    const fetchShow = async () => {
      try {
        const showFromAPI = await fetch(`https://api.tvmaze.com/shows/${showId}`);
        const parsedShow = await showFromAPI.json();
        setShow(parsedShow);
      } catch (err) {
        console.log(err);
      }
    };
    fetchShow();
  }, [showId]);

  return show;
};
