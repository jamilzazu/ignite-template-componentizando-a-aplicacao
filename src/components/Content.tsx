import { MovieCard } from "./MovieCard";

import "../styles/content.scss";

import "../styles/global.scss";

import { IGenreResponseProps, IMovieProps } from "../App";

export interface IContentProps {
  selectedGenre: IGenreResponseProps;
  movies: IMovieProps[];
}

export function Content({ selectedGenre, movies }: IContentProps) {
  return (
    <div className="container">
      <header>
        <span className="category">
          Categoria:<span> {selectedGenre.title}</span>
        </span>
      </header>

      <main>
        <div className="movies-list">
          {movies.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
            />
          ))}
        </div>
      </main>
    </div>
  );
}