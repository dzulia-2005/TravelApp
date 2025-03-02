import React from 'react'
import Logo from "../../assets/images/header/travelLogo.jpg"

const Header:React.FC = () => {
  return (
    <header className="px-10">
      <nav className="flex items-center justify-between ">
        <ul>
            <img src={Logo} alt="Logo" className="w-[100px] h-[80px]"/>
        </ul>
        <ul className="flex items-center w-[30%] gap-[10%]">
            <li>Weather</li>
            <li>about</li>
            <li>Tours</li>
            <li>profile</li>
        </ul>
      </nav>
   </header>
  )
}

export default Header