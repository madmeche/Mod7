import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes, useRoutes, BrowserRouter } from "react-router-dom";
import Home from './Component/Home';
import Post from './Component/Post';
import Dashboard from './Component/Dashboard'

function App() {
  

  return (
    <>
    <Home/>
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      {/* <Route path="/post" element={<Post />} /> */}
      <Route path="/feed" element={<Dashboard />} />
    </Routes>      
    </>
  )
}

export default App
