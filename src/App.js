import React from 'react';

import { Route, Routes,Link} from 'react-router-dom';
import Landing from './components/Landing';
import Moviedetails from './components/Moviedetails';
import './App.css';



const App = () => {


  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Moviedetails/:imdbID" element={<Moviedetails />} />

      </Routes>
     
    </div>
  )
}

export default App





