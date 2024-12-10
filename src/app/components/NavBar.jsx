import Image from 'next/image'
import React from 'react'

function NavBar() {
  return (
    <nav className="navbar">
    <div className="logo" draggable="false">
      <a href='/wlcm' className='flex justify-center items-center gap-2'>
      <Image src={"/sir.svg"} className="" height={60} width={60} alt="logo" />
      </a>
   
    </div>
    <ul className="nav-links">
    <li><a className='linea'  href="#Transform">Transform</a></li>
      <li><a className='linea'  href="#Transition">Transition</a></li>
      <li><a className='linea'  href="#Zindex">Zindex</a></li>
      <li><a className='linea'  href="#Animation">Animation</a></li>

   
    </ul>
    <div className="hamburger">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </nav>
  )
}

export default NavBar