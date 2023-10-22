import { PropsMovies } from "../Interfaces/MoviesInterface"
import MovieCard from "./MovieCard"

interface Props{
    movie:PropsMovies[]
}

const Movies = ( {movie}:Props) => {
  return (
    <div className="grid grid-cols-3 gap-5">
        {movie.map(movieCard =>(
            <MovieCard movieCard={movieCard}/>
        ))}
    </div>
  )
}

export default Movies