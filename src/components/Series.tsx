import axios from 'axios'
import {useEffect , useState} from 'react'
import { useAppSelector } from '../store/hooks'
import { PropsMovies } from '../Interfaces/MoviesInterface'

const Series = () => {

  const [seriesTv , setSeriesTv] = useState<PropsMovies[]>([])
  const {image , api_Key} = useAppSelector(state => state.movies)

  useEffect(() =>{
    const series = async() =>{
      const {data} = await axios.get(`https://api.themoviedb.org/3/discover/tv?page=1&api_key=${api_Key}`)
      setSeriesTv(data.results)
    }
    series()
  },[])

  return (
    <div className='pt-20'>
      <h2 className='text-center text-white text-3xl mb-12'>Series</h2>
      <div className='flex flex-grow gap-8 flex-wrap justify-center'>
        {seriesTv.map(serie =>(
          <img className='w-[450px] max-h-[250px] object-cover rounded-lg mb-5' src={`${image}${serie.poster_path}`} alt='' />
        ))}
      </div>
    </div>
  )
}

export default Series