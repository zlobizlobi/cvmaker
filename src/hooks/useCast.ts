import { useEffect, useState } from 'react';

interface IPerson {
  person: {
    name: string;
    id: number;
  };
}

export const useCast = (showId: string | undefined): IPerson[] => {
  const [cast, setCast] = useState<IPerson[]>([]);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const cast = await fetch(`https://api.tvmaze.com/shows/${showId}/cast`, {
          method: 'GET',
        });
        const parsedResult = await cast.json();
        setCast(parsedResult);
      } catch (err) {
        console.log(err);
      }
    };
    fetchCast();
  }, [showId]);

  return cast;
};
