import React, { useEffect, useState } from 'react'
import axios from 'axios'
import tw from 'twin.macro'
import styled from 'styled-components'
import SearchBar from './SearchBar'
import TypeButton from './TypeButton'
import Card from '../homepage/genre_cards/action/Card'
import CloseButton from './CloseButton'
import Genre from './Genre'

const SafeArea = styled.div`${tw`overflow-x-hidden w-auto mx-5`}`
const FixedContainer = styled.div`${tw`w-screen h-36 fixed z-50 bg-[#080808]`}`
const Heading = styled.div`${tw`fixed text-2xl ml-96 mt-24 font-bold`}`
const Container = styled.div`${tw`absolute top-32 right-12 w-2/3 grid grid-cols-4`}`
const SubContainer = styled.div`${tw`mt-4`}`

const Search = () => {
  const [apiData, setApiData] = useState()
  const [query, setQuery] = useState('')
  const [menu, setMenu] = useState(false)
  const [Text, setText] = useState('searchMovie')
  const [secondApi, setSecondApi] = useState('api/trendingMovie')
  const [genreFilters, setGenreFilters] = useState([])
  const [heading, setHeading] = useState('Latest Movies')

  const toggleMenu = () => {
    setMenu(!menu)
    if(menu === true){
      setText('searchMovie')
      setSecondApi('api/trendingMovie')
    } else {
      setText('searchTV')
      setSecondApi('api/trendingTV')
    }
  }

  const handleInput = (event) => {
    setQuery(event.target.value)
  } 

  const handleSubmit = (event) => {
    event.preventDefault()
    getSearchResults(query)
  } 

  const getSearchResults = (query) => {
    const searchQuery = encodeURIComponent(query)
    axios.get(`api/${Text}?search=${searchQuery}`)
    .then((response) => {
      setApiData(response.data);
    }) 
     .catch((error) => {
    console.log(error)
    })
  }

  useEffect(() => {
    if(query.length > 0) {
      getSearchResults(query)
    }
  },[Text, query])

  // Getting Trending Data
  useEffect(() => {
    setHeading(query === '' ? Text === 'searchMovie' ? 'Latest Movies' : 'Latest Series' : `Showing Results :`)
    if(query === ''){
      axios.get(secondApi) 
      .then((response) => {
        setApiData(response.data);
      }) 
       .catch((error) => {
      console.log(error)
      })
    }  
  }, [Text, query])

  const filteredResults = apiData?.results.filter((data) =>
    genreFilters.length > 0
      ? data.genre_ids.some((genreId) => genreFilters.includes(genreId))
      : true
  )

  return (
    <SafeArea>
      <FixedContainer>
        <Genre type={Text} genreFilter={genreFilters} onFilterChange={setGenreFilters}/>
        <SearchBar onsubmit={handleSubmit} onchange={handleInput}/>
        <TypeButton onclick={toggleMenu} text={Text}/>
        <CloseButton type={Text}/>
        <Heading>{heading}</Heading>
      </FixedContainer>
      <Container>
          {filteredResults?.length > 0 &&
            filteredResults.map((data, index) => (
              <SubContainer key={data.id}>
                <Card data={data} type={Text === 'searchTV' ? 'tv' : 'movies'} />
              </SubContainer>
          ))}
      </Container>
    </SafeArea>
  )
}

export default Search