import Image from 'next/image'
import React from 'react'
import localFont from "next/font/local";


const minecrafterAlt = localFont({
  src:'../fonts/Minecrafter.Alt.ttf',
  display: 'swap',
  weight: '300', // Specify weight if needed
  style: 'normal' // Specify style if needed
});


function NavBar() {
  return (
    <nav className="navbar">
    <div className="logo " draggable="false">
      <a href='/' className='flex justify-center items-center gap-2'>
      <Image src={"/sir.svg"} className="" height={60} width={60} alt="logo" />
      <h1 className={`text-[40px] text-[#754DD2] ${minecrafterAlt.className}   font-semibold my-auto`}>Sirius CSS</h1>
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