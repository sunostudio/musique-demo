import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Main from "../components/Main"

const HomePage = () => {
  let navigate = useNavigate()
  let user = false
  useEffect(() => {
    if (user) navigate("/library")
  }, [])
  return <div>
    <Main />
  </div>
}

export default HomePage
