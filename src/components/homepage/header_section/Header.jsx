import React, { useState } from 'react'
import Logo from '../../../assets/Logo.png'
import Button from './Button'
import Search from './Search'
import Account from './Account'
import styled from 'styled-components'
import tw from 'twin.macro'
import { MdMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

const HeaderContainer = styled.div`${tw`absolute z-50 w-screen flex justify-center`}`
const CenterLogo = styled.img`${tw`hidden lg:inline xl:inline 2xl:inline w-48 lg:w-48 xl:w-48 2xl:w-72 mx-48`}`
const CenterLogoMobile = styled.img`${tw`lg:hidden xl:hidden 2xl:hidden absolute left-3 top-7 w-44`}`
const OverFlowMenu = styled.div`${tw`bg-black bg-opacity-100 fixed z-50 w-screen h-screen grid grid-cols-1 justify-center text-left text-4xl py-32`}`
const CloseButton = styled.button`${tw`lg:hidden xl:hidden 2xl:hidden absolute z-50 right-5 top-10`}`

const Header = () => {
  const [open, setOpen] = useState(false)

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <HeaderContainer>
      <div className='hidden lg:inline xl:inline 2xl:inline mt-5 text-2xl'>
        <Button text={"Movies"} type={"movies"}/>
        <Button text={"TV Shows"} type={"tv"}/>
        <CenterLogo src={Logo} alt="LOGO"/>
        <Search type={"search"}/>
        <Account type={"account"}/>
      </div>

      <CenterLogoMobile src={Logo} alt="LOGO"/>
      <CloseButton onClick={() => setOpen(!open)}>
        <MdMenu size={40} onClick={() => setOpen(!open)}/>
      </CloseButton>

      {open 
        ? <OverFlowMenu>
            <CloseButton onClick={() => setOpen(!open)}>
              <IoMdClose size={40}/>
            </CloseButton>
              <Button text={"Movies"} type={"movies"} close={handleClose}/>
              <Button text={"TV Shows"} type={"tv"} close={handleClose}/>
              <Search type={"search"}/>
              <Account type={"account"}/>
          </OverFlowMenu>
        : ''
      }

    </HeaderContainer>
  )
}

export default Header