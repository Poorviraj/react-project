import React from 'react'
import './Navbar.css'
import navlogo from '../../assets/logo8.png'
import navprofile from '../../assets/nav-profile.svg'
import person from '../../assets/person.jpg'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={navlogo} alt="" className="nav-logo" />
      <p className='heading' >RAJ POTS and FLOWERS Store</p>
      <img src={person} alt="" className="nav-profile" />
    </div>
  )
}

export default Navbar
