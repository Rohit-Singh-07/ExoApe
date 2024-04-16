import React from 'react'
import { Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './components/Home';
import PlayReel from './components/PlayReel';
import ImageShow from './components/ImageShow';
import LocomotiveScroll from 'locomotive-scroll';


const App = () => {

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='text-white overflow-hidden'>

      <Home/>
      <PlayReel/>
      <ImageShow/>
    </div>
  )
}

export default App
