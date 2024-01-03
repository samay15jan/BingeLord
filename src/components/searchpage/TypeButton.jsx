import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import { TiFlowSwitch } from "react-icons/ti";

const Button = styled.button`${tw`fixed z-50 flex top-12 lg:top-7 right-5 lg:right-20 text-lg text-white font-bold px-4 py-2 rounded-3xl`}
transition: background 0.5s ease;
background: linear-gradient(to right, #cc021a, #FF004D);
&:hover {
  background: linear-gradient(to right, #a60516, #a60516);
  color: #d9d4d5;
}
&:focus {
    outline: 2px solid #515151;
}`

const Icon = styled.div`${tw`mt-1 ml-1 hover:rotate-90`}`

const TypeButton = ({ onclick, text}) => {
  return (
    <Button accessKey='r' onClick={onclick}>
        {text === 'searchTV' ? 'Series' : 'Movies'}
        <Icon>
          <TiFlowSwitch size={20}/>
        </Icon>
    </Button>
  )
}

export default TypeButton