import { useEffect,  useState } from "react";
const MovieRandom = () => {
  const [imagenLoading, setImagenLoading] = useState<boolean>(false)
  // useEffect(() => {
    //se va actualizar la imagen cada cierto tiempo
  //   setTimeout(() => {
  //     console.log("cargando Imagen");
  //     setImagenLoading(!imagenLoading)
  //   }, 5000);
  // }, [imagenLoading]);
  return (
    <div className="h-screen bg-gradient-to-t from-[#040714] from-40%  to-blue-500 relative ">
      <div className="bg-[url(https://pics.filmaffinity.com/Fast_Furious_X-556821969-large.jpg)] h-[500px]"></div>
    </div>
  );
};

export default MovieRandom;
