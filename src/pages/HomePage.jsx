import React from 'react'
import Header from '../components/homepage/header_section/Header'
import Trending from '../components/homepage/Trending_section/Trending'
import Recommendation from '../components/homepage/recommendation/Recommendation'
import GenreCards from '../components/homepage/genre_cards/GenreCards'

const HomePage = () => {
  return (
    <div>
        <Header/>
        <Trending/>
        <GenreCards/>
    </div>
  )
}

export default HomePage