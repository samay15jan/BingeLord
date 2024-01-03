import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { useNavigate } from 'react-router-dom'

const ButtonContainer = styled.button`${tw`cursor-pointer lg:text-lg xl:text-lg 2xl:text-4xl font-bold mx-10 mt-2`}`

const Search = ({ type }) => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate(`/${type}`);
  };

  return (
    <ButtonContainer onClick={handleClick}>
      Search
    </ButtonContainer>
  )
}

export default Search