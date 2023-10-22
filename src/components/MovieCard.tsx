import React from 'react'
import { PropsMovies } from '../Interfaces/MoviesInterface'
import { useAppSelector } from "../store/hooks"


interface Props{
  movieCard:PropsMovies
}

const MovieCard = ( {movieCard}:Props) => {
  console.log(movieCard)
  const {image} = useAppSelector(state => state.movies)

  return (
    <div className='text-white'>
      <img className='w-96 h-40 object-cover rounded-lg' src={`${image}${movieCard.poster_path}`} alt=""/>
      <h2>{movieCard.title}</h2>
      <p>{movieCard.release_date}</p>
    </div>
  )
}

export default MovieCard