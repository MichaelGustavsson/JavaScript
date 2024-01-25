// Allt som är gemensamt mellan filmer och TV serier
// placeras här...
export interface BaseType {
  id: number;
  backdrop_path: string;
  poster_path: string;
  original_language: string;
  overview: string;
  vote_average: number;
}
