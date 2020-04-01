interface ShowImage {
  original: string;
}

interface Show {
  name: string;
  genres: Array<string> | [];
  image?: ShowImage;
  summary: string;
  id: number;
}

export interface IShowItem {
  score: number;
  show: Show;
}
