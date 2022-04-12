import React from "react"
import { NavLink } from "react-router-dom"

const navLinks = [
  { name: "HomeTunes", link: "/" },
  { name: "Support", link: "/support" },
  { name: "Sign up", link: "/signup" },
  { name: "Log in", link: "/login" },
  { name: "Playlists", link: "/playlists" },
  { name: "Profile", link: "/profile" },
  { name: "Liked Songs", link: "/liked-songs" },
]
const Nav = () => {
  const activeLink = ({ isActive }) => {
    return {
      color: isActive ? " #6c4" : "#9ca",

    }
  }
  return (
    <div class="w-full h-28 bg-slate-900 px-5 text-orange-200 flex justify-between items-center">
      <div className="px-6 font-extrabold text-3xl hover:text-indigo-300">
        <NavLink to="/" className="flex font-normal justify-between mr-20">
          LOGO
        </NavLink>
      </div>
      <nav className=" flex">
        {navLinks.map((nav, index) => (
          <NavLink
            key={index}
            to={nav.link}
            className="flex font-normal justify-between mr-20"
            style={activeLink}
          >
            {nav.name}
          </NavLink>
        ))}
      </nav>
    </div>
  )
}

export default Nav
