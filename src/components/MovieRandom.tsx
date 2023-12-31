import axios from "axios";
import { useEffect, useState } from "react";
import { useAppSelector } from "../store/hooks";
import { PropsMovies, PropsVideo } from "../Interfaces/MoviesInterface";
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";
import type {MouseEventHandler } from 'react'
// import TrailerMovie from "./TrailerMovie";
import YouTube from "react-youtube";

const MovieRandom = () => {
  const [movieRandom, setMovieRandom] = useState<PropsMovies[]>([]);
  const [video , setVideo ] = useState<boolean>(false)
  const [videoSee , setVideoSee] = useState<PropsVideo[]>([])
  const [id , setId] = useState<number>(0)
  const { api_Key, image } = useAppSelector((state) => state.movies);

  const movie = movieRandom[Math.floor(Math.random() * movieRandom.length)];
  useEffect(() => {
    const randomApi = async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${api_Key}`
      );
      setMovieRandom(data.results);
    };
    randomApi();
  }, []);

  useEffect(() =>{
    console.log('Hola')
    const getVideo = async () => {
      
      const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US&api_key=${api_Key}`)
      setVideoSee(data.results)
    }
    getVideo()
  },[id])

  const handleVideo:MouseEventHandler<HTMLButtonElement> = (id) =>{
    console.log('click')
    setVideo(true)
  }
  
  // console.log(videoSee[0].key)
  return (
    <main className="w-full h-[700px]  ">
      <div className="h-full w-full">
        <div className="absolute w-full h-[700px] bg-gradient-to-t  from-[#040714] "></div>
        <div className="absolute z-40 bottom-[250px] left-[80px] text-white h-[200px] max-w-[700px] ">
          <h2 className="text-5xl pb-4">{movie?.title}</h2>
          <p className="text-[18px]">{movie?.overview}</p>
          <div className="flex gap-5 pt-4">
            <button
            onClick={()=>{
              
              setId(movie.id)
              setVideo(true)
            }} 
            className="py-2 px-4 bg-white text-black font-bold rounded-md flex justify-center items-center gap-2"> <FaPlay/> Play</button>
            <button className="px-5 py-2 bg-slate-400 opacity-50 rounded-md flex justify-center items-center gap-2" > <AiOutlineInfoCircle/> More Info</button>
          </div>
        </div>
        <img
          className="h-[100%] min-w-[100%] object-cover "
          src={`${image}${movie?.poster_path}`}
          alt=""
        />
      </div>
      {/* {video && <YouTube className="absolute z-50" videoId={`${videoSee[0].key}`} ></YouTube>} */}
      {/* {video && (<TrailerMovie/>)} */}
    </main>
  );  
};

export default MovieRandom;
