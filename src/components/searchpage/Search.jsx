import React, { useEffect, useState } from 'react'
import axios from 'axios'
import tw from 'twin.macro'
import styled from 'styled-components'
import SearchBar from './SearchBar'
import TypeButton from './TypeButton'
import Card from '../homepage/genre_cards/action/Card'
import CloseButton from './CloseButton'
import Genre from './Genre'

const FlexContainer = styled.div`${tw``}`
const SafeArea = styled.div`${tw`overflow-x-hidden w-auto m-5`}`
const Container = styled.div`${tw`absolute top-20 right-14 w-2/3 grid grid-cols-4`}`
const SubContainer = styled.div`${tw`mt-4`}`

const Search = () => {
  const [apiData, setApiData] = useState()
  const [query, setQuery] = useState('')
  const [menu, setMenu] = useState(false)
  const [Text, setText] = useState('searchMovie')
  const [genreFilters, setGenreFilters] = useState([])

  const toggleMenu = () => {
    setMenu(!menu)
    if(menu === true){
      setText('searchMovie')
    } else {
      setText('searchTV')
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

  return (
    <SafeArea>
      <Genre type={Text} genreFilter={genreFilters} onFilterChange={setGenreFilters}/>
      <FlexContainer>
        <SearchBar onsubmit={handleSubmit} onchange={handleInput}/>
        <TypeButton onclick={toggleMenu} text={Text}/>
        <CloseButton type={Text}/>
      </FlexContainer>
      <Container>
        {apiData?.results.length > 0  && genreFilters.length > 0 
                ? apiData.results.map((data, index) => (
                  <SubContainer key={data.id}>
                    {data.genre_ids.some((genreId) => genreFilters.includes(genreId)) && (
                    <Card 
                      data={data}
                      type={Text === 'searchTV' ? 'tv' : 'movies'}
                    />
                    )}
                  </SubContainer>
                  ))
            
                : apiData?.results.length > 0  && apiData.results.map((data, index) => (
                    <SubContainer key={data.id}>
                      <Card data={data} type={Text === 'searchTV' ? 'tv' : 'movies'}/>
                    </SubContainer>
                  ))
        }
      </Container>
    </SafeArea>
  )
}

export default Search

