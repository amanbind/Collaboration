import React from 'react'
import Blog from './pages/blog';
import Home from './pages/home';
import {Route, Routes,Router} from "react-router-dom";
import './App.css'

const App = () => {
  return (
    <div className='app'>
    <div className='container'>
      <Routes>
      
        <Route path="/" element = {<Home/>} />
        <Route path = "/blog/:id"element = {<Blog/>}/>
      </Routes>
      </div>
  

  </div>
  )
}

export default App


