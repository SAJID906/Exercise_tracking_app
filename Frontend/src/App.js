import React, { createContext, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './Components/About'
import Activites from './Components/Activites'
import Classes from './Components/Classes'
import FoData from './Components/FoData'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Home from './Components/Home'

const flowdata=createContext();

export function App() {
 
  return (
    <div className='container-fluid p-0'>
      
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='classes' element={<Classes/>}/>
        <Route path='FoData' element={<FoData/>}/>
        {/* <Route path='Footer' element={<Footer/>}/> */}
      </Routes>
  
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App;
export {flowdata}


