import { Link } from "react-router-dom";
import '../styles.css'

const Navigate = () => {

  const handleClick = () =>{
    localStorage.removeItem('idDetail')
  }
  return (
    <nav className="h-[70px] w-full flex justify-center fixed z-10 contenedor ">
      <div className=" w-[80%] mx-auto h-[70px] text-white text-[18px] font-bold opacity-100 flex justify-between items-center ">
        <h2>Logo</h2>
        <ul className="flex gap-10">
          <li>
            <Link to={"/"} onClick={handleClick}>Movies</Link>
          </li>

          <li>
            <Link to={"/series"} onClick={handleClick}>Series</Link>
          </li>
          <li>
            <Link to={"/anime"} onClick={handleClick}>Anime</Link>
          </li>
          <li>
            <Link to={'/searchMovie'} onClick={handleClick}>SearchMovie</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigate;
