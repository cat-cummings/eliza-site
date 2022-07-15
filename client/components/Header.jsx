import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

  return (
    <>
      <div className='nav'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/swims'>Swims</Link>
        <Link to='/Gallery'>Gallery</Link>
      </div>
    </>
  )
}

export default Header