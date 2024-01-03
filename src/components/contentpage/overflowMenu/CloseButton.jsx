import React from 'react'
import tw from 'twin.macro';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { IoMdClose } from "react-icons/io";

const Button = styled.button`${tw`absolute z-50 right-5 top-10 lg:top-5 px-1 py-1 rounded-lg bg-[#080808]`} 
  transition: background 0.1s ease;
  &:hover {
    background-color: #252525;
}`

const CloseButton = ({ id, type }) => {
    // Navigation
    const navigate = useNavigate()
    const close = () => {
      navigate(`/${type}/${id}`);
    }
    
  return (
    <div>
        <Button onClick={close}>
            <IoMdClose size={30}/>
        </Button>
    </div>
  )
}

export default CloseButton