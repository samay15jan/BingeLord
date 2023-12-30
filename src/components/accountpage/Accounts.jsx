import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import Image from '../../assets/account.png'

const Container = styled.div`${tw`w-screen mx-20 my-10`}`
const Text = styled.div`${tw`w-screen my-5 text-4xl font-extrabold`}`
const SubContainer = styled.div`${tw`w-screen mx-20 my-10`}`

const Accounts = () => {
  return (
    <Container>
        <Text>Users Portriat</Text>
        <img src={Image} alt="Logo" />
        <SubContainer>

        </SubContainer>
    </Container>
  )
}

export default Accounts