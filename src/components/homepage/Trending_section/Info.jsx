import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

const Button = styled.button`${tw`absolute z-50 bg-[#262626] shadow-2xl shadow-[#262626] text-white font-bold text-2xl px-6 py-2 ml-56 mt-9 rounded-xl`}
transform: skew(-14deg);
transition: background 0.3s ease;
&:hover {
    background-color: #c9c9c9;
    color: #262626;
}`

const Info = () => {
  return (
    <Button>
        +
    </Button>
  )
}

export default Info