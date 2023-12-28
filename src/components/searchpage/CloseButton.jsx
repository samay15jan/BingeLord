import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import { IoMdClose } from "react-icons/io";
import { useNavigate } from 'react-router-dom'

const Button = styled.button`${tw`fixed z-10 right-5 top-7 mt-1 px-1 py-1 rounded-lg bg-[#080808]`} 
  transition: background 0.2s ease;
  &:hover {
    background-color: #252525;
}`

const CloseButton = ({ text }) => {
    const navigate = useNavigate()
    const close = () => {
        var type
        if(text === 'searchTV') {
            type = 'tv' 
        }
         else {
            type = 'movies'
        } 
        navigate(`/${type}`);
    }
    
    return (
        <Button onClick={close}>
          <IoMdClose size={30}/>
        </Button>
    )
}

export default CloseButton