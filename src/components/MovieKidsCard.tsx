import { PropsMovies } from "../Interfaces/MoviesInterface";
import { useAppSelector , useAppDispatch} from "../store/hooks";
import { useNavigate } from "react-router-dom";
import { getId } from "../store/movies/MovieSlice";

interface Props {
  movie: PropsMovies;
}

const MovieKidsCard = ({ movie }: Props) => {
  const { image } = useAppSelector((state) => state.movies);
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const handleDetail = () => {
    navigate(`detail:${movie.id}`)
    dispatch(getId(movie.id))
  };

  return (
    <div className="text-white min-w-[300px] ">
      <img
        className="rounded-lg cursor-pointer"
        src={`${image}${movie.poster_path}`}
        alt=""
        onClick={handleDetail}
      />
    </div>
  );
};

export default MovieKidsCard;
