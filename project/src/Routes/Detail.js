import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail(){
  const {id} = useParams(); // { id: 123123 }
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});

  const getMovie = async ()=>{
    const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
    const json = await response.json();
    setMovie(json.data.movie);
    setLoading(false);
  };
  useEffect(()=>{
    getMovie();
  }, []);

  return(
    <div>
      {
        loading
        ? <h1>Loading...</h1>
        : (
          <div>
            <img src={movie.large_cover_image} alt="" />
            <h2>{movie.title_long}</h2>
          </div>
        )
      }
    </div>
  );
};

export default Detail;