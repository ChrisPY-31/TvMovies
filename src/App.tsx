import { useEffect, useState } from "react";
import axios from "axios";
import { PropsMovies } from "./Interfaces/MoviesInterface";
import Movies from "./components/Movies";
import MovieRandom from "./components/MovieRandom";
const apikey: string = "717567e8723fe13b0ea61ab7a37f74ec";

function App() {
  const [movie, setMovie] = useState<PropsMovies[]>([]);

  useEffect(() => {
    const movieApi = async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${apikey}`
      );
      setMovie(data.results);
    };
    movieApi();
  }, []);

  return (
    <div className="bg-[#040714] min-h-screen">
      <MovieRandom/>
      <div className="w-[80%] mx-auto">
        <Movies movie={movie} />
      </div>
    </div>
  );
}

export default App;
