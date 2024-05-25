import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie() {
  const [ movie, setMovie ] = useState({});
  const params = useParams();
  const movieId = params.id;

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${movieId}`)
    .then(resp => resp.json())
    .then(data => setMovie(data))
    .catch(error => console.error(error));
  }, [movieId]);

  const movieGenre = (movie.genres || []).map(genre => {
    return <span key={genre}>{genre}</span>    
  });

  if(!movie.title){
    return <h1>Loading...</h1>;
  };

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{movie.title}</h1>
        <p>{movie.time}</p>
        <div>{movieGenre}</div>
      </main>
    </>
  );
};

export default Movie;
