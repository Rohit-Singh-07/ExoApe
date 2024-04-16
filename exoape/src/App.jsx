import React from 'react'
import { Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './components/Home';


const App = () => {
  return (
    <div className='text-white overflow-hidden'>

      <Home/>
    </div>
  )
}

export default App
