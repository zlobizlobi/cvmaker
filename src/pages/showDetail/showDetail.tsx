import React from 'react';
import { useParams } from 'react-router-dom';
import { IShowItem } from '../../types';

interface IProps {
  showItem: IShowItem;
}

export const ShowDetail: React.FC<IProps> = ({ showItem }) => {
  debugger;
  console.log(showItem);
  let { movieId } = useParams();
  return <div>{movieId}</div>;
};
