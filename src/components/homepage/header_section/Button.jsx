import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { useNavigate } from 'react-router-dom'

const ButtonContainer = styled.button`${tw`text-lg font-bold mx-10 hover:text-gray-500 mt-6`}`

const Button = ({ text, type }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/${type}`);
  };

  return (
    <ButtonContainer onClick={handleClick}>
      {text}
    </ButtonContainer>
  )
}

export default Button