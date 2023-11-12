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
  const dispatch = useAppDispatch();

  const handleClick = () => {
    let idCard = movieCard.id;
    localStorage.setItem("idDetail", idCard.toString());
    navigate(`/detail:${idCard}`);
    dispatch(getboolen());
  };
  return (
    <div className="bg-white rounded-lg flex mt-5  ">
      <img
        onClick={handleClick}
        className="h-[150px] w-[100px] object-cover rounded-md cursor-pointer"
        src={`${image}${movieCard.poster_path}`}
        alt=""
      />
      <div className="mx-4 my-5 flex flex-col justify-center">
        <p className="font-bold text-lg ">{movieCard.title}</p>
        <p className="text-[#999999]" >{movieCard.release_date}</p>
        <p>{movieCard.overview?.substring(0 , 300)}...</p>
      </div>
    </div>
  );
};

export default SearchCard;
