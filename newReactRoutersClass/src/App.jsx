import { useState } from 'react'
import './App.css'
import { AboutUs } from './components/AboutUs'
import { Home } from './components/Home'
import { Route , Routes } from 'react-router-dom'
import { Navbar } from './components/Navbar'

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/AboutUs" element={<AboutUs/>}></Route>
    </Routes>
    </>
  )
}

export default App
