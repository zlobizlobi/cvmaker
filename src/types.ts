interface IShowImage {
  original: string;
}

export interface IShow {
  name: string;
  genres: Array<string> | [];
  image: IShowImage;
  summary: string;
  id: number;
}

export interface IShowItem {
  score: number;
  show: IShow;
}

export interface IPerson {
  person: {
    name: string;
    id: number;
  };
}
