import React from 'react'
import Header from '../components/homepage/header_section/Header'
import Trending from '../components/homepage/Trending_section/Trending'
import GenreCards from '../components/homepage/genre_cards/GenreCards'
import Footer from '../components/homepage/footer/Footer'

const HomePage = () => {
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