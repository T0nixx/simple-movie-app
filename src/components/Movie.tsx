import React from "react";
import { Link } from "react-router-dom";
import "./Movie.css";

export function Movie({ id, year, title, summary, posterUrl, genres }: MovieInfo): JSX.Element {
  return (
    <div key={id} className="movie">
      <Link<MovieInfo>
        to={{
          pathname: `/detail/:${id}`,
          state: {
            id,
            year,
            title,
            summary,
            posterUrl,
            genres,
          },
        }}
      >
        <div className="movie__poster">
          <img src={posterUrl} alt={`poster of ${title}`} title={title} />
        </div>
        <div className="movie__data">
          <h1 className="movie__title">{title}</h1>
          <h3 className="movie__year">{year}</h3>
          <ul className="genres">
            {genres.map((genre) => (
              <li key={genre} className="genres__genre">
                {genre}
              </li>
            ))}
          </ul>
          <p className="movie__summary">{summary}</p>
        </div>
      </Link>
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
