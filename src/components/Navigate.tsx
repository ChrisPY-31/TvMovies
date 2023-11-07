import { Link } from "react-router-dom";
import '../styles.css'
import { BiSearchAlt } from "react-icons/bi";
import { MdLocalMovies } from "react-icons/md";
import {SiSteelseries} from 'react-icons/si'

const Navigate = () => {

  const handleClick = () =>{
    localStorage.removeItem('idDetail')
  }
  return (
    <nav className="h-[70px] w-full flex justify-center fixed z-10 contenedor ">
      <div className=" w-[80%] mx-auto h-[70px] text-white text-[18px] font-bold opacity-100 flex justify-between items-center ">
        <h2>Logo</h2>
        <ul className="flex gap-10">
          <li className="flex justify-center items-center gap-2 hover:border-b-2 cursor-pointer">
            <MdLocalMovies/>
            <Link to={"/"} onClick={handleClick}>Peliculas</Link>
          </li  >

          <li className="flex justify-center items-center gap-2 hover:border-b-2 cursor-pointer">
            <SiSteelseries/>
            <Link to={"/series"} onClick={handleClick}>Series</Link>
          </li>

          <li className="flex justify-center items-center gap-2  hover:border-b-2 cursor-pointer">
            <BiSearchAlt/>
            <Link to={'/searchMovie'} onClick={handleClick}>Buscador</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigate;
