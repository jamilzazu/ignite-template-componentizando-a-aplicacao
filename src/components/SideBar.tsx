import { Button } from "./Button";

import { IGenreResponseProps } from "../App";

import "../styles/sidebar.scss";

export interface ISideBarProps {
  genres: IGenreResponseProps[];
  selectedGenreId: number;
  handleClickButton: (genreId: number) => void;
}

export function SideBar({
  genres,
  selectedGenreId,
  handleClickButton,
}: ISideBarProps) {
  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map((genre) => (
          <Button
            id={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}
