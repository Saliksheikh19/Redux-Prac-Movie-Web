import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies , getAllShows} from "../../Redux/movies/movieSlice";
import Moviecard from "../moviecard/moviecard"

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
  let renderMovies , renderShows= "" ;

  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => (
        <Moviecard key={index} data={movie} />
      ))
    ) : (
      <div className="movies-error">
        <h3>{movies.Error}</h3>
      </div>
    );

    renderShows =
    shows.Response === "True" ? (
      shows.Search.map((movie, index) => (
        <Moviecard key={index} data={movie} />
      ))
    ) : (
      <div className="movies-error">
        <h3>{shows.Error}</h3>
      </div>
    );

 
  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2 style={{color:"grey" , textAlign:"center"}}>Movies</h2>
        <div className="container-fluid d-flex flex-wrap" >{renderMovies}</div>
      </div>
      <div className="movie-list">
        <h2 style={{color:"grey" , textAlign:"center"}}>Shows</h2>
        <div className="container-fluid d-flex flex-wrap" >{renderShows}</div>
      </div>
    </div>
  );
};

export default MovieListing