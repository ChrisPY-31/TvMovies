import Movies from "./components/Movies";
import Navigate from "./components/Navigate";
import { Route, Routes } from "react-router-dom";
import SearchMovie from "./components/SearchMovie";
import Series from "./components/Series";
import Detail from "./components/Detail";
import { useAppSelector } from "./store/hooks";
import {useEffect , useState} from 'react'
//ciencia 
// https://api.themoviedb.org/3/discover/movie?with_genres=878&with_cast=500&sort_by=vote_average.desc&api_key=717567e8723fe13b0ea61ab7a37f74ec
function App() {
  const {click} = useAppSelector(state => state.movies)
  const [Detalle , setDetalle] = useState<Number>(0)

useEffect(() =>{
    const local = localStorage.getItem('idDetail')
    setDetalle(Number(local))
},[click])

  return (
    <div className="min-h-screen bg-[#040714] pb-5">
      <Navigate/>
      
      <Routes>
        <Route path="/" element={<Movies/>}/>
        <Route path={`/detail:${Detalle}`} element={<Detail/>}/>
        <Route path="/series" element={<Series/>}/>
        <Route path="/anime"/>
        <Route path="/searchMovie" element={<SearchMovie/>}/>     
      </Routes>
    </div>
  );
}

export default App;

//para instalar dependencias aque usar @types
