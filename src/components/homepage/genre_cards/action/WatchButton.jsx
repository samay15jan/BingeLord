import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { useNavigate } from 'react-router-dom';

const Button = styled.button`
${tw`absolute bottom-4 z-50 text-white font-bold text-sm px-8 py-2 ml-8 rounded-xl`}
transform: skew(-14deg);
transition: background 0.5s ease;
background: linear-gradient(to right, #cc021a, #FF004D);

&:hover {
  background: linear-gradient(to right, #a60516, #a60516);
  color: #d9d4d5;
}`

const WatchButton = ({ id, type }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${type}/${id}`);
  };

  return (
    <Button onClick={handleClick}>
        Watch Now
    </Button>
  )
}

export default WatchButton