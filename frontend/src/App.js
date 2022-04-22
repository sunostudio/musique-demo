import "./App.css"
import { Routes, Route } from "react-router-dom"
import Footer from "./components/Footer"
import LoginPage from "./pages/LoginPage"
import HomePage from "./pages/HomePage"
import RegisterPage from "./pages/RegisterPage"
import ProfilePage from "./pages/ProfilePage"
import NotFoundPage from "./pages/NotFoundPage"
import Nav from "./components/Nav"
import Library from "./pages/Library"
import Pricing from "./pages/Pricing"

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<RegisterPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/library" element={<Library />} />
        <Route path="/pricing" element={<Pricing />} />

        <Route path="/not-found" element={<NotFoundPage />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
