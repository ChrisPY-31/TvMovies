import { Link } from "react-router-dom";

const Navigate = () => {
  return (
    <nav className="w-full h-[100px] fixed">
      <div className="w-[80%] mx-auto h-full text-white flex justify-between items-center ">
        <h2>Logo</h2>
        <ul className="flex gap-10">
          <li>
            <Link to={"/"}>Movies</Link>
          </li>

          <li>
            <Link to={"/series"}>Series</Link>
          </li>
          <li>
            <Link to={"/anime"}>Anime</Link>
          </li>
          <li>
            <Link to={'/searchMovie'}>SearchMovie</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigate;
