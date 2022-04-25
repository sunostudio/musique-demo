import React from "react"
import { NavLink } from "react-router-dom"
import logo from "../logo/suno_png.png"

const navLinks = [
  { name: "HomeTunes", link: "/" },
  { name: "Pricing", link: "/pricing" },
  { name: "Sign up", link: "/signup" },
  { name: "Log in", link: "/login" },
]
const authLinks = [
  { name: "HomeTunes", link: "/" },
  { name: "Support", link: "/support" },
  { name: "Library", link: "/library" },
  { name: "New Releases", link: "/new-releases" },
  { name: "Podcasts", link: "/podcasts" },
  { name: "Profile", link: "/profile" },
]

const Nav = () => {
  const activeLink = ({ isActive }) => {
    return {
      color: isActive ? " #6c4" : "#9ca",
    }
  }

  const logoStyle = {
    background: "rgba(9, 32, 42, 0.79)",
    borderRadius: "16",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(9.1)",
    "-webkit-backdrop-filter": "blur(9.1px)",
    border: "1px solid rgba(9, 32, 42, 0.43)",
  }

  const navBar = () => {
    let user = false
    if (user) {
      return (
        <nav className=" flex">
          {authLinks.map((nav, index) => (
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
      )
    } else {
      return (
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
      )
    }
  }

  return (
    <div class="w-full h-28 dark:bg-slate-900 px-5 text-orange-200 flex justify-between items-center">
      <div className="px-6 font-extrabold text-3xl hover:text-indigo-300">
        <NavLink
          to="/"
          className="flex font-normal justify-between mr-20 w-28  "
        >
          <img className={logoStyle} src={logo} alt="logo" />
        </NavLink>
      </div>

      {navBar()}

      {/* <nav className=" flex">
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
      </nav> */}
    </div>
  )
}

export default Nav
