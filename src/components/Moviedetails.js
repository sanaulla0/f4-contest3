import React , {useState , useEffect} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import  "./MovieDetails.css";


const Moviedetails = () => {
 const { imdbID } = useParams();
 const [movietalks, setMovietalks] = useState([]);

 useEffect(() => {
  const fetchData = async () => {
    const apiKey = '24f800a2';
    const url = `https://www.omdbapi.com/?apikey=${apiKey}&i=${imdbID}`;
    try {
      const response = await axios.get(url);
     console.log(response.data);
      setMovietalks(response.data);
      console.log(movietalks);
    } catch (error) {
      console.error(error);
    }
  };
  fetchData();
}, [imdbID]);
 
 
  return (
   <div>
    <div className='get'>
    <h1>Title: {movietalks.Title}</h1>
        <h2>Year: {movietalks.Year}</h2>
        <h2>Released: {movietalks.Released}</h2>
          <h2>Actrees: {movietalks.Actors}</h2>
          <h2>Languages: {movietalks.Language}</h2>
         
        <h2>Plot: {movietalks.Plot}</h2>
         {/* <h1>Title : {movietalk.title}</h1> */}
    </div>
        

    </div>
  )
  }
  
export default Moviedetails;