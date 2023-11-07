import { PropsMovies } from "../Interfaces/MoviesInterface";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../store/hooks";
import { getboolen } from "../store/movies/MovieSlice";

interface Props {
  movieCard: PropsMovies;
  image: string;
}

const SearchCard = ({ movieCard, image }: Props) => {
  const navigate = useNavigate();
    const dispatch = useAppDispatch()

  const handleClick = () => {
    let idCard = movieCard.id
    localStorage.setItem('idDetail',idCard.toString())
    navigate(`/detail:${idCard}`);
    dispatch(getboolen())
  };
  return (
    <img
      onClick={handleClick}
      className="h-[200px] min-w-[350px] object-cover rounded-md mb-10 "
      src={`${image}${movieCard.poster_path}`}
      alt=""
    />
  );
};

export default SearchCard;
