import React from 'react'
import Logo from '../../../assets/Logo.png'
import Button from './Button'
import Search from './Search'
import Account from './Account'
import styled from 'styled-components'
import tw from 'twin.macro'
import { useNavigate } from 'react-router-dom'

const HeaderContainer = styled.div`${tw`absolute z-50 w-screen flex justify-center cursor-pointer mt-4`}`
const CenterLogo = styled.img`${tw`w-48 mx-48`}`

const Header = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/`);
  };

  return (
    <HeaderContainer>
        <Button text={"Movies"} type={"movies"}/>
        <Button text={"TV Shows"} type={"tv"}/>
        <button onClick={handleClick}>
          <CenterLogo src={Logo} alt="LOGO" />
        </button>   
        <Search type={"search"}/>
        <Account type={"account"}/>
    </HeaderContainer>
  )
}

export default Header