import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

const Button = styled.button`
${tw`absolute z-50 shadow-2xl shadow-[#c20432] text-white font-bold text-xl px-8 py-2 ml-5 mt-8 rounded-xl`}
transform: skew(-14deg);
transition: background 0.3s ease;
background: linear-gradient(to right, #cc021a, #FF004D);

&:hover {
  background: linear-gradient(to right, #a60516, #a60516);
  color: #d9d4d5;
}`

const PlayButton = ({ text }) => {
  return (
    <Button>
        {text}
    </Button>
  )
}

export default PlayButton