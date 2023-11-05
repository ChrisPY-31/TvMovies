import React, { useEffect, useState } from "react";
import { useAppSelector } from "../store/hooks";
import axios from "axios";
import { PropsCrew, PropsDetail } from "../Interfaces/MoviesInterface";
import Actors from "./Actors";
import Recomendations from "./Recomendations";
import "../styles.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

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
      let id = localStorage.getItem("idDetail");
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${Number(
          id
        )}/similar?api_key=717567e8723fe13b0ea61ab7a37f74ec`
      );
      setSimilar(data.results);
    };
    recomendation();
  }, []);
  console.log(cardDetail);

  return (
    <div className="min-h-screen ">
      {/* <div className="absolute w-full opacity-50 h-[700px] bg-gradient-to-r from-[#1b1b32]"></div> */}

      <div className="text-white bg-cover h-[90vh]" style={divStyle}>
        <div className="w-[90%] mx-auto pt-32 flex gap-10 justify-center items-center h-[600px]">
          <img
            className="rounded-lg max-w-[350px] h-[485px]"
            src={`${image}${cardDetail.poster_path}`}
            alt=""
          />
          <div className="w-2/3 h-[250px] px-10 py-5 flex flex-col justify-around">
            <div className="flex gap-3">
              <h3 className="font-bold text-5xl ">{cardDetail.title}</h3>
              {/* <span className="text-4xl font-light">{cardDetail.release_date.substring(0,4)}</span> */}
            </div>
            <div>
              <p className="font-semibold text-lg">{cardDetail.overview && 'Vista General'}</p>
              <p>{cardDetail.overview}</p>
            </div>
            <p>{cardDetail.popularity}</p>
            <p>{cardDetail.release_date}</p>
          </div>
        </div>
      </div>
      <Actors crew={crew} />
      <Recomendations similar={similar} />
    </div>
  );
};

export default Detail;
