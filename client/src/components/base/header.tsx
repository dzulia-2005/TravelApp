import React from 'react'
import Logo from "../../assets/images/header/travelLogo.jpg"
import {NavLink, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useLogoutMutation} from "../../features/auth/authApi.ts";
import {clearUser} from "../../features/auth/authSlices.ts";

const Header:React.FC = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    const dispatch = useDispatch();
    const [logout] = useLogoutMutation();


    const handleLogOut = async() => {
        await logout().unwrap();
        localStorage.removeItem("token");
        localStorage.removeItem("refreshToken");
        dispatch(clearUser());
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
              token ?
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