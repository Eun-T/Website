import React from 'react'
import './header.css'

const Header = () => {
  return (
    <>
      <div className="header__container">
        <a href="" className='logo'>trippy</a>
        <nav>
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Service</a></li>
            <li><a href="">Contact</a></li>
            <a href="" className='btn'>sign up</a>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Header