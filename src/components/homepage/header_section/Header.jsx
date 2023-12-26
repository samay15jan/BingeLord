import React from 'react'
import Logo from '../../../assets/Logo.png'
import Button from './Button'
import Search from './Search'
import Account from './Account'
import styled from 'styled-components'
import tw from 'twin.macro'

const HeaderContainer = styled.div`${tw`absolute z-50 w-screen flex justify-center cursor-pointer mt-4`}`
const CenterLogo = styled.img`${tw`w-48 mx-48`}`

const Header = () => {

  return (
    <HeaderContainer>
        <Button text={"Movies"} type={"movies"}/>
        <Button text={"TV Shows"} type={"tv"}/>
        <CenterLogo src={Logo} alt="LOGO" />
        <Search type={"search"}/>
        <Account type={"account"}/>
    </HeaderContainer>
  )
}

export default Header