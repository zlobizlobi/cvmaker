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
    const fetchCast = () => {
      fetch(`http://api.tvmaze.com/shows/${showId}/cast`, {
        method: 'GET',
      })
        .then(async (result: any) => {
          const cast = await result.json();
          setCast(cast);
        })
        .catch(err => {
          console.log(err);
        });
    };

    fetchCast();
  }, [showId]);

  return cast;
};
