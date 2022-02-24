import { useEffect, useState } from "react";
import {Link} from "react-router-dom";

function Movies(){
  const [loading, setLoading] = useState(true);

  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const response = await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`);
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);

  };

  useEffect(() => {
    getMovies();
  }, []);

  console.log(movies);



  return (
    <>
      {
        loading
        ? <h1>Loading...</h1>
        : (
          <Movie movies={movies} />
        )
      }
    </>
  );
}

function Movie({movies}){
  return (
    <div>
      {
        movies.map((movie, i) => {
          return (
            <div key={i} style={{marginBottom: "30px",}}>
              <Link to={`/detail/${movie.id}`}><h1>{movie.title} ({movie.year})</h1></Link>
              <img src={movie.medium_cover_image} alt={`movie ${movie.title} cover`} />
              <ul
                style={{
                  display:"flex",
                  justifyContent:"center",
                  flexDirection:"row",
                }}
              >
                {
                movie.genres.map((genre, i) => <li key={i} style={{margin:"0 30px"}}>{genre}</li>)
                }
              </ul>
              <p>{movie.summary}</p>
            </div>
          );
        })
      }
    </div>
  );
}

export default Movies;