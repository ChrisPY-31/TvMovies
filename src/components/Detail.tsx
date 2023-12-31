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
  const [porcentaje , setPorcentaje] = useState<string>('')

  let id = localStorage.getItem("idDetail");
  useEffect(() => {
    
    const movieDetail = async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${Number(
          id
        )}?api_key=717567e8723fe13b0ea61ab7a37f74ec`
      );
      setCartDetail(data);
    };
    movieDetail();
  }, [id]);

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
  const nuevoPorcertanje:string = (cardDetail.vote_average * 10).toString().substring(0, 2);

  useEffect(() =>{
    setTimeout(() =>{
      setPorcentaje(nuevoPorcertanje)
    },500)
  },[cardDetail])


  return (
    <div className="min-h-screen ">
      <div className="absolute w-full h-[750px]  bg-gradient-to-t from-[#040714]"></div>
      <div className="text-white bg-cover h-[100vh]" style={divStyle}>
        <div className="w-[90%] mx-auto pt-32 flex gap-10 items-center h-[600px]">
          <img
            className="rounded-lg max-w-[350px] h-[485px] absolute left-28"
            src={`${image}${cardDetail.poster_path}`}
            alt=""
          />
          <div className="w-2/3 h-[300px] px-10 py-2 flex flex-col justify-between absolute right-20  ">
            <div className="flex gap-3">
              <h3 className="font-bold text-5xl ">{cardDetail.title}</h3>
            </div>

            <div className="flex gap-5">
              <p>{cardDetail.release_date}</p>
              <div className="flex">
                {cardDetail.genres?.map((ele) => (
                  <span className="px-1">{ele.name} </span>
                ))}
              </div>
            </div>

            {cardDetail.vote_average && (
              <div className="w-16 h-16 font-bold ">
                <div className="bg-[#0c0c18] rounded-full">
                  <CircularProgressbar
                    value={Number(porcentaje )}
                    text={`${porcentaje ? porcentaje:'0' }%`}
                    styles={buildStyles({
                      pathTransitionDuration:1.5,
                      textColor: "#FFF",
                      textSize: "32px",
                      pathColor: "#3CCC26",
                    })}
                  />
                </div>
              </div>
            )}

            <div>
              <p className="font-bold text-lg">
                {cardDetail.overview && "Vista General"}
              </p>
              <p>{cardDetail.overview}</p>
            </div>
          </div>
        </div>
      </div>
      <Actors crew={crew} />
      <Recomendations similar={similar} />
    </div>
  );
};

export default Detail;
