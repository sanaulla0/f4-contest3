import React, {useState} from 'react';
import axios from 'axios';
import "./Landing.css"
import { Route, Routes,Link } from 'react-router-dom';
const Landing = () => {

   const [query , setQuery] = useState('')
     const [movies , setMovies] = useState([]);

  const searchMovies = async (search) =>{
       const apiKey= '24f800a2';
       const url = `https://www.omdbapi.com/?i=tt3896198&apikey=${apiKey}&s=${search.replace(/\s+/g,'+')}`;
 try{
      const response = await axios.get(url);
      // console.log(response.data);
      setMovies(response.data.Search);
      
 } catch(error){
      if(error.response){
          window.alert(`Api Error: ${error.response.data}`);
      }
      else if(Error.request){
            window.alert('please try again');
      }
      else{
           window.alert('error');
      }
 }
 
      }


const handleSubmit = (e) =>{
        
        if(query==''){
           alert("enter movie name");
        }
        e.preventDefault();
        searchMovies(query);
}


  return (
    <div>
      <h1 className='title'>Movies App</h1>
      <hr></hr>
   <h2 className='title'>Search Movies By Their Title</h2>     

<form  >
<input type="text" placeholder='Search' className='searchbt' onChange={(e)=>setQuery(e.target.value)}></input> <br/>
 
  <button type="button" className='btn' onClick={handleSubmit}>Search</button>
  </form>
  
    <h1>movie results for '{query}'</h1> <br/>

  
  <div className='container'>
 
  {movies.map((movie) => (
    <div className='cont1' key={movie.imdbID}>
                        
                   <div className='imgtag'><img src= {movie.Poster} alt="movies" /></div>
                   <div className='movie-details'>
          <span> {movie.Title} </span>  <br/>
                  <span> type: {movie.Type}</span>   <br/>
                    <span>Year:{movie.Year}</span>

                   <Link to={`/Moviedetails/${movie.imdbID}`}>  
              <button type='button'  className='btn'>Know More</button>
              </Link>
          </div>
          </div>
        ))}
</div>
    </div>
  )
}

export default Landing;