import React, { useEffect } from 'react'
import Header from '../components/homepage/header_section/Header'
import Trending from '../components/homepage/Trending_section/Trending'
import GenreCards from '../components/homepage/genre_cards/GenreCards'
import Footer from '../components/homepage/footer/Footer'
import { useNavigate } from 'react-router-dom'
import { getAuth, onAuthStateChanged } from "firebase/auth";

const HomePage = () => {
    // Auto Redirect
    const navigate = useNavigate()
    const auth = getAuth()
    useEffect(() => {
      onAuthStateChanged(auth, user => {
        if (!user) {
          navigate('/auth')
        }
      })
    },[auth, navigate])
  return (
    <div>
        <Header />
        <Trending />
        <GenreCards />
        <Footer /> 
    </div>
  )
}

export default HomePage