import axios from 'axios'
import React, { useEffect , useState} from 'react'
import { useAppSelector } from '../store/hooks'
import type {FormEventHandler} from 'react'
import { PropsMovies } from '../Interfaces/MoviesInterface'
import MovieCard from './MovieCard'

const SearchMovie = () => {

  const [search , setSearch] = useState<string>('')
  const [searchFilter , setSearchFilter] = useState<PropsMovies[]>([])
  const {image} = useAppSelector(state => state.movies)
  //

  const handleSubmit:FormEventHandler<HTMLFormElement> = (e) =>{
    e.preventDefault()
    const searchMovie = async() =>{
      const {data} = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${search}&api_key=717567e8723fe13b0ea61ab7a37f74ec`)
      setSearchFilter(data.results)
    }
    searchMovie()
  }
  console.log(searchFilter)

  return (
    <div className='pt-20'>
      <form action="" onSubmit={handleSubmit} >
        <input type="text" value={search} onChange={(e) =>setSearch(e.target.value)}/>
        <button className='text-white '>Buscar</button>
      </form>
      {
        searchFilter.length === 0?
        <h1 className='text-white text-3xl font-bold text-center '>No hay nada de peliculas</h1>
        :
        searchFilter.map(movieCard =>(
          <MovieCard movieCard={movieCard}/>
        ))
      }
    </div>
  )
}

export default SearchMovie