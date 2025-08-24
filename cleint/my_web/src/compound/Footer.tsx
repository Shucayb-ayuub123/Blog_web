import React from 'react'
import Logo from '../img/Logo.png'
const Footer = () => {
  return (
    <div className='flex justify-between px-5 items-center bg-cyan-400  mt-96'>
      <img src={Logo} alt="" width={130}/>
      <span>Mand with love 🧡 <b>React.js</b></span>
    </div>
  )
}

export default Footer