import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import About from './About'
import Gallery from './Gallery'
import SwimContainer from './SwimContainer'

const App = () => {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/swims' element={<SwimContainer />} />
        <Route path='/gallery' element={<Gallery />} />
      </Routes>
    </>
  )
}

export default App
