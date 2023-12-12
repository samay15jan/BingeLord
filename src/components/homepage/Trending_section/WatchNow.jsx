import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

const Button = styled.button`
${tw`absolute z-50 bg-gradient-to-r from-[#cc021a] to-[#FF004D] shadow-2xl shadow-[#c20432] text-white font-bold text-xl px-8 py-2 ml-8 mt-10 rounded-xl`}
transform: skew(-14deg);
transition: background 0.5s ease;
&:hover {
  background: linear-gradient(to right, #a60516, #a60516);
  color: #d9d4d5;
}`

const WatchNow = () => {
  return (
    <Button>
        Watch Now
    </Button>
  )
}

export default WatchNow