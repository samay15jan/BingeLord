import React from 'react'
import Gif from '../assets/404.gif' 
import styled from 'styled-components'
import tw from 'twin.macro'
import { useNavigate } from 'react-router-dom'

const Container = styled.div`${tw`overflow-hidden flex justify-center bg-[#1a1b20] w-screen h-screen pt-10 pb-32`}`
const Image = styled.img`${tw`w-auto`}`

const Button = styled.button`${tw`absolute bottom-14 bg-white shadow-sm shadow-white text-black font-bold text-lg px-6 py-2 mt-8 rounded-xl`}
transition: background 0.3s ease;
&:hover {
    background-color: #353535;
    color: white;
}`

const ErrorPage = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/movies')
  }
  return (
    <Container>
      <Image src={Gif} alt="404" />
      <Button onClick={handleClick}>Go Back</Button>
    </Container>
  )
}

export default ErrorPage