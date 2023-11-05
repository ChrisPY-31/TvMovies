import { PropsMovies } from "../Interfaces/MoviesInterface";
import MovieCard from "./MovieCard";

interface Props {
  similar: PropsMovies[];
}

const Recomendations = ({ similar }: Props) => {
  return (
    <div className="w-[90%] mx-auto mt-5">
      <h2 className="text-white text-4xl py-8 font-bold ">Similar</h2>
      <div className="flex gap-5 overflow-x-auto custom-scrollbar">
        {similar.map((movieCard) => (
          <MovieCard key={movieCard.id} movieCard={movieCard} />
        ))}
      </div>
    </div>
  );
};

export default Recomendations;
