import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Home';
import About from './About';

import Contact from './Contact';

import Navigate from './Navigate';
import Notfound from './Notfound';



function App(){
  return(
    <div>
      <BrowserRouter>
      <Navigate/>
      <Routes>
        <Route path="/" element ={<Home/>}/>
        <Route path="/About" element ={<About/>}/>
        <Route path="/Contact" element ={<Contact/>}/>
        <Route path="*" element ={<Notfound/>}/>

        <Route/>
        </Routes>
        </BrowserRouter>
        
      
    </div>
  )
}
export default App;
