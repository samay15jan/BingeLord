import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { useNavigate } from 'react-router-dom';

const Button = styled.button`${tw`absolute z-50 bg-[#262626] shadow-2xl shadow-[#c9c9c9] text-white font-bold text-lg px-6 py-2 ml-36 mt-8 rounded-xl`}
transform: skew(-14deg);
transition: background 0.3s ease;
&:hover {
    background-color: #c9c9c9;
    color: #262626;
}`

const TrailerButton = ({ ID, menu, url, text }) => {
  const navigate = useNavigate()
  console.log(ID)

  const handleClick = () => {
    navigate(`/movie/${ID}/${menu}/${url}`);
  };

  return (
    <Button onClick={handleClick}>
        {text}
    </Button>
  )
}

export default TrailerButton