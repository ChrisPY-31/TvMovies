import axios from "axios";
import { useEffect, useState } from "react";
import { useAppSelector } from "../store/hooks";
import { PropsMovies } from "../Interfaces/MoviesInterface";
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";

const MovieRandom = () => {
  const [movieRandom, setMovieRandom] = useState<PropsMovies[]>([]);
  const { api_Key, image } = useAppSelector((state) => state.movies);

  const movie = movieRandom[Math.floor(Math.random() * movieRandom.length)];
  console.log(movie);
  useEffect(() => {
    const randomApi = async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${api_Key}`
      );
      setMovieRandom(data.results);
    };
    randomApi();
  }, []);
  
  return (
    <main className="w-full h-[700px]  ">
      <div className="h-full w-full">
        <div className="absolute w-full h-[700px] bg-gradient-to-t  from-[#040714] "></div>
        <div className="absolute z-40 bottom-[250px] left-[80px] text-white h-[200px] max-w-[700px] ">
          <h2 className="text-5xl pb-4">{movie?.title}</h2>
          <p className="text-[18px]">{movie?.overview}</p>
          <div className="flex gap-5 pt-4">
            <button className="py-2 px-4 bg-white text-black font-bold rounded-md flex justify-center items-center gap-2"> <FaPlay/> Play</button>
            <button className="px-5 py-2 bg-slate-400 opacity-50 rounded-md flex justify-center items-center gap-2" > <AiOutlineInfoCircle/> More Info</button>
          </div>
        </div>
        <img
          className="h-[100%] min-w-[100%] object-cover "
          src={`${image}${movie?.poster_path}`}
          alt=""
        />
      </div>
    </main>
  );  
};

export default MovieRandom;
