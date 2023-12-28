import React, { useEffect, useState } from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'

const Container = styled.div`${tw`mx-7 fixed bg-[#161616] w-1/5 mt-7 p-5 rounded-3xl shadow-2xl`}`
const Heading = styled.div`${tw`text-xl font-bold ml-2 `}`
const Flex2 = styled.div`${tw`flex mx-2 my-4`}`
const CheckBox = styled.input`${tw`w-5`} accent-color: #cc021a`
const Text = styled.div`${tw`text-lg mx-4 text-gray-400`}`

const movieGenre = {
    'Action': 28,
    'Adventure': 12,
    'Animation': 16,
    'Comedy': 35,
    'Crime': 80,
    'Documentary': 99,
    'Drama': 18,
    'Family': 10751,
    'Fantasy': 14,
    'Horror': 27,
    'Mystery': 9648,
    'Romance': 10749,
    'Science Fiction': 878,
    'Western': 37
}

const tvGenre = {
    'Action & Adventure': 10759,
    'Animation': 16,
    'Comedy': 35,
    'Crime': 80,
    'Documentary': 99,
    'Drama': 18,
    'Family': 10751,
    'Kids': 10762,
    'Mystery': 9648,
    'Reality': 10764,
    'Sci-Fi & Fantasy': 10765,
    'Western': 37
}

const Genre = ({ type, genreFilter, onFilterChange }) => {
    const [menu, setMenu] = useState()

    useEffect(() => {
        if(type === 'searchTV') {
            setMenu(tvGenre)
        } else {
            setMenu(movieGenre)
        } 
    },[type])

    const handleChecked= (category) => {
        const categoryId = menu[category]
        if(genreFilter.includes(categoryId)){
            onFilterChange(genreFilter.filter((id) => id !== categoryId))
        } else {
            onFilterChange([...genreFilter, categoryId])
        }
    }

  return (
      <Container>
        <Heading>Genre</Heading>
        {menu && Object.keys(menu).map((category, index) => (
            <Flex2 key={index}>
                <CheckBox type="checkbox" onChange={() => handleChecked(category)}/>
                <Text>{category}</Text>
            </Flex2>
        ))}
      </Container>
  )
}

export default Genre