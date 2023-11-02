import { Link } from "react-router-dom";

const Navigate = () => {

  const handleClick = () =>{
    localStorage.removeItem('idDetail')
  }
  return (
    <nav className="h-[100px] flex justify-center">
      <div className=" w-[80%] mx-auto fixed h-[100px] text-white flex justify-between items-center ">
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
