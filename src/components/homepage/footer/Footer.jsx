import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

const Container = styled.div`${tw`mx-10 absolute w-auto justify-center text-lg font-bold py-10`}`
const Flex = styled.div`${tw`flex mt-5`}`
const Icon1 = styled.img`${tw`w-20 mr-5`}`
const Icon2 = styled.img`${tw`w-28 h-8`}`

const Footer = () => {
  return (
    <Container>
        Powered With :
        <Flex>
        <>
            <Icon1 src='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg'/>
        </>
        <>
            <Icon2 src='https://vidsrc.to/assets/web/images/logo.png?v1' />
        </>
        </Flex>
    </Container>
  )
}

export default Footer