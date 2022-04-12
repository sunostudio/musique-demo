import "./App.css"
import { Routes, Route } from "react-router-dom"
import Footer from "./components/Footer"
import LoginPage from "./pages/LoginPage"
import LandingPage from "./pages/LandingPage"
import HomePage from "./pages/HomePage"
import RegisterPage from "./pages/RegisterPage"
import ProfilePage from "./pages/ProfilePage"
import NotFoundPage from "./pages/NotFoundPage"
import LikedSongsPage from "./pages/LikedSongsPage"
import PlaylistsPage from "./pages/PlaylistsPage"
import Nav from "./components/Nav"
import SupportPage from "./pages/SupportPage"

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/liked-songs" element={<LikedSongsPage />} />
        <Route path="/playlists" element={<PlaylistsPage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/not-found" element={<NotFoundPage />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </>
  )
}

export default App
