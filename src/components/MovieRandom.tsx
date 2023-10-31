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
    <div className="h-screen bg-gradient-to-t from-[#040714] from-40%  to-blue-500">
      <div></div>
    </div>
  );
};

export default MovieRandom;
