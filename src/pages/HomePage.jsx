import React from 'react'
import Header from '../components/homepage/header_section/Header'
import Trending from '../components/homepage/Trending_section/Trending'
import Recommendation from '../components/homepage/recommendation/Recommendation'

const HomePage = () => {
  return (
    <div>
        <Header/>
        <Trending/>
    </div>
  )
}

export default HomePage