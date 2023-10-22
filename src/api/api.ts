import axios from 'axios'
export const AxiosApi = axios.create({
    baseURL:'https://api.themoviedb.org/3/discover/'
}) 