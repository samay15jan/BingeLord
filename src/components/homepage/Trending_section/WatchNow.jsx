import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { useNavigate } from 'react-router-dom';

const Button = styled.button`
${tw`absolute z-50 shadow-2xl shadow-[#c20432] text-white font-bold text-xl px-8 py-2 ml-8 mt-10 rounded-xl`}
transform: skew(-14deg);
transition: background 0.5s ease;
background: linear-gradient(to right, #cc021a, #FF004D);

&:hover {
  background: linear-gradient(to right, #a60516, #a60516);
  color: #d9d4d5;
}`

const WatchNow = ({ id, text }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/movie/${id}`);
  };


  return (
    <Button onClick={handleClick}> 
        {text}
    </Button>
  )
}

export default WatchNow