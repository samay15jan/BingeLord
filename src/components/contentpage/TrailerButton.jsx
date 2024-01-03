import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { useNavigate } from 'react-router-dom';

const Button = styled.button`${tw`absolute z-50 bg-[#191919] shadow-2xl shadow-[#303030] text-white font-bold text-lg px-6 pb-2 pt-3 ml-36 mt-9 rounded-xl`}
transform: skew(-14deg);
transition: background 0.3s ease;
&:hover {
    background-color: #353535;
    color: white;
}`

const TrailerButton = ({ ID, menu, url, text, type }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/${type}/${ID}/${menu}/${url}`);
  };

  return (
    <Button onClick={handleClick}>
        {text}
    </Button>
  )
}

export default TrailerButton