import React, { useEffect, useState } from "react";
import { useAppSelector } from "../store/hooks";
import axios from "axios";
import { PropsCrew, PropsDetail } from "../Interfaces/MoviesInterface";
import Actors from "./Actors";
import MovieCard from "./MovieCard";
import Recomendations from "./Recomendations";

const Detail = () => {
  const { image } = useAppSelector((state) => state.movies);
  const [cardDetail, setCartDetail] = useState<PropsDetail>({} as PropsDetail);
  const [crew, setCrew] = useState<PropsCrew[]>([]);
  const [similar, setSimilar] = useState<PropsDetail[]>([]);

  useEffect(() => {
    let id = localStorage.getItem("idDetail");
    const movieDetail = async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${Number(
          id
        )}?api_key=717567e8723fe13b0ea61ab7a37f74ec`
      );
      setCartDetail(data);
    };
    movieDetail();
  }, []);

  useEffect(() => {
    let id = localStorage.getItem("idDetail");
    const actors = async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${Number(
          id
        )}/credits?api_key=717567e8723fe13b0ea61ab7a37f74ec`
      );
      setCrew(data.cast);
    };
    actors();
  }, []);
  const divStyle = {
    backgroundImage: ` url(${image}${cardDetail.backdrop_path})`,
  };

  useEffect(() => {
    const recomendation = async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${cardDetail.id}/recommendations?api_key=717567e8723fe13b0ea61ab7a37f74ec`
      );
      setSimilar(data.results);
    };
    recomendation();
  }, []);
  console.log(similar);

  return (
    <div className="min-h-screen">
      <div className="text-white text-5xl bg-cover h-[80vh] " style={divStyle}>
        <div>
          <img
            className="h-52"
            src={`${image}${cardDetail.poster_path}`}
            alt=""
          />
        </div>
      </div>
      <Actors crew={crew} />
      <Recomendations similar={similar} />
    </div>
  );
};

export default Detail;
