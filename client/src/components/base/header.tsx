import React from 'react'
import Logo from "../../assets/images/header/travelLogo.jpg"
import {NavLink, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "../../app/store.ts";

const Header:React.FC = () => {
    const navigate = useNavigate();
    const user = useSelector((state:RootState)=>state.auth.user)

    const handleLogOut = async() => {
        localStorage.removeItem("token");
        localStorage.removeItem("refreshToken");
        navigate("/login")
    }

  return (
    <header className="px-10">
      <nav className="flex items-center justify-between ">
          <NavLink to={"/"}>
              <ul>
                  <img src={Logo} alt="Logo" className="w-[100px] h-[80px]"/>
              </ul>
          </NavLink>
          {
                  user ?
                  <ul className="flex items-center w-[30%] gap-[10%]">
                      <NavLink to={"/weather-page"}>
                          <li>Weather</li>
                      </NavLink>
                      <NavLink to={"/create-Card"}>
                          <li>Create</li>
                      </NavLink>
                      <NavLink to={"/profilepage"}>
                          <li>profile</li>
                      </NavLink>
                      <li onClick={() => handleLogOut()} className="cursor-pointer">Log_out</li>
                 </ul>
                  :
                  <ul className="flex items-center w-[30%] gap-[10%]">
                      <NavLink to={"/login"}>
                          <li>login</li>
                      </NavLink>
                      <NavLink to={"/registration"}>
                          <li>registration</li>
                      </NavLink>
                  </ul>
          }
      </nav>
    </header>
  )
}

export default Header