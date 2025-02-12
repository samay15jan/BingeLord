import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import Logo from '../../assets//Logo.png'
import BackgroundImage from '../../assets/landingPage/logo.png'
import Background from '../../assets/landingPage/background.png'
import Image1 from '../../assets/landingPage/1.png'
import Image2 from '../../assets/landingPage/2.png'
import Image3 from '../../assets/landingPage/3.png'
import Image4 from '../../assets/landingPage/4.png'
import Image5 from '../../assets/landingPage/5.png'
import Footer from '../homepage/footer/Footer'
import { useNavigate } from 'react-router-dom'
import SectionLeft from './SectionLeft'
import SectionRight from './SectionRight'
import { FaArrowDown } from "react-icons/fa"

const Container = styled.div`${tw`bg-[#000000]`}`
const LogoContainer = styled.div`${tw`absolute z-50 w-screen flex justify-center`}`
const TopLogo = styled.img`${tw`mt-8 lg:mt-2 w-48`}`
const BackgroundContainer = styled.img`${tw`w-screen h-screen absolute opacity-30 lg:opacity-50 ring-4 ring-[#a60516]`}`
const SubContainer = styled.div`${tw`h-screen grid lg:grid-cols-2 lg:ml-48`}`
const Text = styled.div`${tw`text-white mt-48 lg:mt-32 mx-8 lg:mx-0 lg:ml-10 text-4xl lg:text-5xl font-bold`}`
const SubHeading = styled.div`${tw`text-left my-10 text-xl font-medium text-gray-400`}`
const TryNow = styled.div`${tw`flex justify-center text-xl text-center shadow-sm shadow-[#a60516]`}`
const Image = styled.img`${tw`overflow-hidden absolute bottom-20 lg:bottom-10 lg:right-14`}`
const DownIcon = styled.div`${tw`absolute bottom-5 w-screen flex justify-center animate-bounce opacity-60`}`
const Title = styled.div`${tw`hidden lg:block mt-4`}`
const Button1 = styled.div`${tw`absolute text-center w-32 mt-1 ml-2 mb-32 p-2 text-xl font-bold shadow-md shadow-[#8f1835] h-12 rounded-lg`}
transition: background 0.5s ease;
background: linear-gradient(to right, #d91432, #e61b48);
&:hover {
    background: linear-gradient(to right, #252525, #252525);
    color: #d9d4d5;
}
&:focus {
  outline: 1px solid #e61b48;
}`
const Button2 = styled.div`${tw`hidden lg:block text-center w-32 mt-1 ml-2 mb-32 p-2 text-xl font-bold shadow-md shadow-[#8f1835] h-12 rounded-lg`}
transition: background 0.5s ease;
background: linear-gradient(to right, #d91432, #e61b48);
&:hover {
    background: linear-gradient(to right, #252525, #252525);
    color: #d9d4d5;
}
&:focus {
  outline: 1px solid #e61b48;
}`

const Main = () => {
  // Navigation
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('auth')
  }
  
  return (
    <Container>
      <LogoContainer>
        <TopLogo src={Logo} alt="Logo" />
      </LogoContainer>
      <BackgroundContainer src={Background} alt="img" />

      <SubContainer>
        <Text>
          Discover a Cinematic Wonderland
          <SubHeading>Prepare for a Rollercoaster of Emotions, Laughter, and 'Just One More Episode' Excuses.</SubHeading>
          <Button1 onClick={handleClick}>Explore</Button1>
        </Text>
      </SubContainer>
      <Image src={BackgroundImage} alt="img" />

      <DownIcon>
        <FaArrowDown size={20}/>
      </DownIcon>

      <SectionRight 
        src={Image1}
        heading={"Dive into the Cinematic Universe"}
        paragraph={"Immerse yourself in the latest and trending movies and series. It's your personal gateway to an unparalleled streaming experience."}
      />
      
      <SectionLeft 
        src={Image2}
        heading={"Experience Like Never Before"}
        paragraph={"The cutting-edge UI ensures seamless navigation, allowing you to effortlessly dive into the heart of the story."}
      />
      <SectionRight 
        src={Image3}
        heading={"Curate Your Cinematic Escape"}
        paragraph={"Indulge in a tailored movie experience on Bingelord's genre-based movie list. Save your favorites effortlessly to your watchlist for later enjoyment."}
      />
      < SectionLeft
        src={Image4}
        heading={"Experience Like Never Before"}
        paragraph={"Whether you're in the mood for a blockbuster movie or a binge-worthy series, Bingelord's search page transforms your queries into a personalized cinematic journey."}
      />
      <SectionRight 
        src={Image5}
        heading={"Personalize Your Journey"}
        paragraph={"Explore, curate, and enjoy – your cinematic adventure is now in your hands. With watch list have your next binge-worthy content ready."}
      />

      <TryNow>
        <Title>Start Your Cinematic Odyssey Today!</Title>
        <Button2 onClick={handleClick}>Try Now !</Button2>
      </TryNow>

      <Footer />

    </Container>
  )
}

export default Main