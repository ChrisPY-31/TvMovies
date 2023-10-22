import { PropsMovies } from "../../Interfaces/MoviesInterface"
import axios from 'axios'
import { AxiosApi } from "../../api/api"

//llamar datos de la Api
// export const getApiMovie = () => {
//     return async(dispatch:PropsMovies) =>{
//         try {            
//             const {data} = await axios.get(`${AxiosApi}3/discover/movie?api_key=${apikey}`) 
//             console.log(data) 
//         } catch (error) {
//             console.log(error)
//         }
//     }
// }