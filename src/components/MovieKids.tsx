import { PropsMovies } from "../Interfaces/MoviesInterface";
import MovieKidsCard from "./MovieKidsCard";

interface Props {
  movieKids: PropsMovies[];
}

const MovieKids = ({ movieKids }: Props) => {
  return (
    <div className="w-full h-[500px] ">
      <div className="w-[80%] mx-auto">
        <h2 className="text-white text-3xl pb-5 ">MovieKids</h2>
        <div className="flex gap-5 overflow-x-auto custom-scrollbar">
          {movieKids.map((movie) => (
            <MovieKidsCard movie={movie} key={movie.id}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieKids;
