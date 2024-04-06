import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


// import './App.css'
import Nav from './navigation/Nav'
import Footer from './Footer/Footer';
import Home from './Home/Home.jsx';
import About from './about/About';
import Placements from './placements/Placements';
import Companies from "./Companies.jsx"; // Make sure the file is named companies.jsx
import Collaboration from './Collabarations.jsx';

function App() {
  return(
    <div>
      <Nav></Nav>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>  } />
        <Route path="/about" element={<About/>  } />
        <Route path='/placements' element={<Placements />}></Route>
      </Routes>


      </BrowserRouter>
      <Footer></Footer>
      
       {/* <Companies/> */}
       {/* <Collaboration/> */}

    </div>
  );
 
}

export default App
