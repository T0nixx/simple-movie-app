import React from "react";
import "./Movie.css";

export function Movie({ id, year, title, summary, posterUrl, genres }: MovieInfo): JSX.Element {
  return (
    <div key={id} className="movie">
      <img src={posterUrl} alt={`poster of ${title}`} title={title} />
      <div className="movie__data">
        <h1 className="movie__title">{title}</h1>
        <h3 className="movie__year">{year}</h3>
        <p className="movie__summary">{summary}</p>
        <ul className="genres">
          {genres.map((genre) => (
            <li key={genre} className="genres__genre">
              {genre}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export interface MovieInfo {
  id: number;
  year: number;
  title: string;
  summary: string;
  posterUrl: string;
  genres: string[];
}

export interface MovieFromAPI {
  id: number;
  year: number;
  title: string;
  summary: string;
  medium_cover_image: string;
  genres: string[];
}
