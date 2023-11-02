import React from "react";
import { PropsCrew } from "../Interfaces/MoviesInterface";
import { useAppSelector } from "../store/hooks";
import '../styles.css'

interface Props {
  crew: PropsCrew[];
}

const Actors = ({ crew }: Props) => {
  const { image } = useAppSelector((state) => state.movies);
  return (
    <div className="w-[90%] mx-auto mt-10">
      <h2 className="text-white text-4xl pb-8 font-bold ">Crew</h2>
      <div className="flex gap-5 custom-scrollbar overflow-x-auto ">
        {crew.map((person) => (
          <div className="min-w-[184px] h-[265px] bg-white rounded-lg">
            <img src={`${image}${person.profile_path}`} alt={person.name} className="h-[80%]  w-full"/>
            <div  className="w-[90%] mx-auto" >
              <p className="font-bold text-[16px]">{person.name}</p>
              <p className="text-[14px]">{person.character}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Actors;
