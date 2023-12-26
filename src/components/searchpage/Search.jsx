import React, { useState } from 'react'
import axios from 'axios'
import tw from 'twin.macro'
import styled from 'styled-components'
import SearchBar from './SearchBar'
import TypeButton from './TypeButton'
import Card from '../homepage/genre_cards/action/Card'

const FlexContainer = styled.div`${tw``}`
const SafeArea = styled.div`${tw`w-auto m-5`}`
const Container = styled.div`${tw`absolute right-5 w-2/3 grid grid-cols-4`}`
const SubContainer = styled.div`${tw`mt-4`}`
const Heading = styled.div`
  ${tw`ml-10 mt-5 my-5 text-3xl text-white font-bold`}
`

const Search = () => {
  const [apiData, setApiData] = useState()
  const [query, setQuery] = useState('')
  const [menu, setMenu] = useState(false)
  const [Text, setText] = useState('searchMovie')

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

  const getSearchResults = () => {
    const searchQuery = encodeURIComponent(query)
    axios.get(`api/${Text}?search=${searchQuery}`)
    .then((response) => {
      setApiData(response.data);
    }) 
     .catch((error) => {
    console.log(error)
    })
  } 

  return (
    <SafeArea>
      <FlexContainer>
        <SearchBar onsubmit={handleSubmit} onchange={handleInput}/>
        <TypeButton onclick={toggleMenu} text={Text}/>
      </FlexContainer>
      <Container>
        {apiData?.results.length > 0  && 
          apiData.results.map((data, index) => (
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