import React from "react";
import axios from "axios";
import { Movie, MovieInfo, MovieFromAPI } from "../components/Movie";
import "./Home.css";

class Home extends React.Component<
  Record<string, never>,
  { isLoading: boolean; movies: MovieInfo[] }
> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      isLoading: true,
      movies: [],
    };
  }

  async componentDidMount(): Promise<void> {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get<{ data: { movies: MovieFromAPI[] } }>(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating",
    );
    this.setState({
      movies: movies.map(({ title, year, id, medium_cover_image, summary, genres }) => ({
        title,
        year,
        id,
        summary,
        posterUrl: medium_cover_image,
        genres,
      })),
      isLoading: false,
    });
  }

  render(): JSX.Element {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">{movies.map(Movie)}</div>
        )}
      </section>
    );
  }
}

export default Home;
