import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAppSelector } from "../store/hooks";
import type { FormEventHandler } from "react";
import { PropsMovies } from "../Interfaces/MoviesInterface";
import SearchCard from "./SearchCard";

const SearchMovie = () => {
  const [search, setSearch] = useState<string>("");
  const [mensaje, setMensaje] = useState<string>("");
  const [searchFilter, setSearchFilter] = useState<PropsMovies[]>([]);
  const [recomendation, setRecomendation] = useState<PropsMovies[]>([]);
  const { image } = useAppSelector((state) => state.movies);
  //

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const searchMovie = async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${search}&api_key=717567e8723fe13b0ea61ab7a37f74ec`
      );
      setSearchFilter(data.results);
    };
    searchMovie();
    setSearch("");
    setMensaje(search);
  };
  useEffect(() => {
    const ficcion = async () => {
      const { data } = await axios.get(
        "https://api.themoviedb.org/3/discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc&page=1&api_key=717567e8723fe13b0ea61ab7a37f74ec"
      );
      setRecomendation(data.results);
    };
    ficcion();
  }, []);

  const dataSearch = recomendation.filter((data) => data.backdrop_path !== null);
  const searchUser = searchFilter.filter(data => data.backdrop_path !==null)

  return (
    <div className="w-[90%] mx-auto  pt-20">
      <form action="" onSubmit={handleSubmit}>
        <input
          autoFocus
          className="rounded-xl pl-2 bg-[#111a3b] text-white outline-none w-[300px] py-2"
          placeholder="Peliculas, Series , etc"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <div>
        {searchFilter.length === 0 ? (
          <div className="mt-10">
            <h3 className="text-4xl font-semibold text-white ">
              Recomendados Para ti:{" "}
            </h3>
            <div>
              {dataSearch.map(MovieCard =>(
                  <SearchCard movieCard={MovieCard} image={image}/>
              ))}
            </div>
          </div>
        ) : (
          <div className="mt-10 w-90%">
            <h3 className="mb-10 text-4xl font-semibold text-white ">
              Resultados para: {mensaje}
            </h3>
            <div className="">
              {searchUser.map((movieCard) => (
                <SearchCard movieCard={movieCard} image={image} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchMovie;
