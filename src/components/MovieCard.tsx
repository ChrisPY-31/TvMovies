import React from "react";
import { PropsMovies } from "../Interfaces/MoviesInterface";
import { useAppSelector , useAppDispatch} from "../store/hooks";
import { useNavigate } from "react-router-dom";
import type {MouseEventHandler} from 'react'
import { getId, getboolen } from "../store/movies/MovieSlice";

interface Props {
  movieCard: PropsMovies;
}

const MovieCard = ({ movieCard }: Props) => {
  const { image } = useAppSelector((state) => state.movies);
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const handleDelete:MouseEventHandler<HTMLImageElement> = () =>{
    let idCard:number = movieCard.id
    localStorage.setItem('idDetail',idCard.toString())
    navigate(`detail:${idCard}`)
    
    dispatch(getboolen())
    dispatch(getId(movieCard.id))

  }

  return (
    <div className="text-white min-w-[200px] ">
      <img
        className="rounded-lg cursor-pointer"
        src={`${image}${movieCard.poster_path}`}
        alt=""
        onClick={handleDelete}
      />
      <div className="text-center mt-2">
        <p>{movieCard.release_date.substring(0,4)}</p>
      </div>
    </div>
  );
};

export default MovieCard;
