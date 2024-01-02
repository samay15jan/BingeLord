import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

const Container = styled.div`${tw`flex absolute w-screen justify-center text-lg lg:text-xl font-medium py-14`}`
const SubContainer = styled.div`${tw`flex`}`
const Bold = styled.a`${tw`font-bold ml-1`}
transition: color -0.3s ease;
&:hover {
  color: #d90948;
}`
const Icons = styled.div`${tw`flex ml-1 text-2xl`}`


const Footer = () => {
  return (
    <Container>
      <SubContainer>
        Crafted By 
        <Bold href='https://github.com/samay15jan' target='_blank'>Samay Kumar !</Bold>
        <Icons>😎 ⚡</Icons>
      </SubContainer>
    </Container>
  )
}

export default Footer