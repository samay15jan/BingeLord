import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const ButtonContainer = styled.button`${tw`cursor-pointer lg:text-lg xl:text-lg 2xl:text-4xl font-bold mx-10 hover:text-gray-500 mt-2`}`

const Account = ({ type }) => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate(`/${type}`);
  };

  return (
    <ButtonContainer onClick={handleClick}>
      Account
    </ButtonContainer>
  )
}

export default Account