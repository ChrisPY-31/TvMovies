import React from "react";
import { PropsCrew } from "../Interfaces/MoviesInterface";
import { useAppSelector } from "../store/hooks";
import "../styles.css";

interface Props {
  crew: PropsCrew[];
}

const Actors = ({ crew }: Props) => {
  const { image } = useAppSelector((state) => state.movies);
  return (
    <div className="w-[90%] mx-auto mt-8">
      <h2 className="text-white text-4xl pb-8 font-bold ">Crew</h2>
      <div className="flex gap-5 custom-scrollbar overflow-x-auto ">
        {crew.map((person) => (
          <div
            key={person.id}
            className="min-w-[184px] h-auto bg-white rounded-lg"
          >
            <div className="">
              <img
                src={`${image}${person.profile_path}`?`${image}${person.profile_path}` :'https://thumbs.dreamstime.com/b/vector-de-perfil-avatar-predeterminado-foto-usuario-medios-sociales-icono-183042379.jpg'}
                alt={person.name}
                className="h-[75%] w-full rounded-t-lg"
              />
              <div className="w-[90%] mx-auto">
                <p className="font-bold text-[16px]">{person.name}</p>
                <p className="text-[14px]">{person.character}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Actors;
