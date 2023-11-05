import { useState, useEffect } from "react";
import axios from "axios";
import { PropsMovies } from "../Interfaces/MoviesInterface";
import MovieCard from "./MovieCard";
import "../styles.css";
import MovieRandom from "./MovieRandom";
const apikey: string = "717567e8723fe13b0ea61ab7a37f74ec";

const Movies = () => {
  const [movie, setMovie] = useState<PropsMovies[]>([]);
  const [movieKids, setMoviekids] = useState<PropsMovies[]>([]);

  useEffect(() => {
    const movieApi = async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${apikey}`
      );
      setMovie(data.results);
    };

    const movieCiencia = async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&page=2&api_key=${apikey}`
      );
      setMoviekids(data.results);
    };
    movieCiencia();
    movieApi();
  }, []);

  return (
    <div className="w-full">
      <MovieRandom />
      <div className="w-[90%] mx-auto my-5">
        <h2 className="text-white text-3xl pb-5 ">Tendencia</h2>
        <div className="flex gap-5 overflow-x-auto custom-scrollbar">
          {movie.map((movieCard) => (
            <MovieCard key={movieCard.id} movieCard={movieCard} />
          ))}
        </div>
      </div>

      <div className="w-[90%] mx-auto my-5">
        <h2 className="text-white text-3xl pb-5">Kids</h2>
        <div className="flex gap-5 overflow-x-auto custom-scrollbar">
          {movieKids.map((movieCard) => (
            <MovieCard key={movieCard.id} movieCard={movieCard} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Movies;
