import { PropsMovies } from "../Interfaces/MoviesInterface";
import MovieCard from "./MovieCard";

interface Props {
  similar: PropsMovies[];
}

const Recomendations = ({ similar }: Props) => {
  return (
    <div className="w-[90%] mx-auto">
      <h1 className="text-white text-3xl pb-5">Tendencia</h1>
      <div className="flex gap-5 overflow-x-auto custom-scrollbar">
        {similar.map((movieCard) => (
          <MovieCard key={movieCard.id} movieCard={movieCard} />
        ))}
      </div>
    </div>
  );
};

export default Recomendations;
