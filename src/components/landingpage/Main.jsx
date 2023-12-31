import React, { useEffect, useState } from 'react'
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

const Container = styled.div`${tw`bg-[#000000] `}`
const TopLogo = styled.img`${tw`absolute z-50 right-1/3 mr-32 mt-2 w-44`}`
const BackgroundContainer = styled.img`${tw`w-screen h-screen absolute opacity-50 ring-4 ring-[#a60516]`}`
const SubContainer = styled.div`${tw`h-screen grid grid-cols-2 pb-28 ml-48 mb-10`}`
const Image = styled.img`${tw`overflow-hidden absolute bottom-0 right-0 p-5`}`
const Text = styled.div`${tw`text-white mt-32 ml-10 text-5xl font-bold`}`
const SubHeading = styled.div`${tw`text-left my-10 text-xl font-medium text-gray-400`}`
const TryNow = styled.div`${tw`flex justify-center text-xl text-center shadow-sm shadow-[#a60516]`}`
const Title = styled.div`${tw`mt-4`}`
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
const Button2 = styled.div`${tw`text-center w-32 mt-1 ml-2 mb-32 p-2 text-xl font-bold shadow-md shadow-[#8f1835] h-12 rounded-lg`}
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
      <TopLogo src={Logo} alt="img" />
      <BackgroundContainer src={Background} alt="img" />

      <SubContainer>
        <Text>
          Discover a Cinematic Wonderland
          <SubHeading>Prepare for a Rollercoaster of Emotions, Laughter, and 'Just One More Episode' Excuses.</SubHeading>
          <Button1 onClick={handleClick}>Explore</Button1>
        </Text>
      </SubContainer>
      <Image src={BackgroundImage} alt="img" />

      <SectionLeft 
        src={Image1}
        heading={"Dive Deeper into the Cinematic Universe"}
        paragraph={"Immerse yourself in the latest and trending movies and series with our state-of-the-art platform. Our intuitive user interface brings you seamless navigation, featuring a dynamic home screen showcasing the hottest releases and trending content. It's your personal gateway to an unparalleled streaming experience"}
      />
      <SectionRight 
        src={Image2}
        heading={"Experience Like Never Before"}
        paragraph={"Our cutting-edge UI ensures seamless navigation, allowing you to effortlessly dive into the heart of the story. Discover essential details, ratings, and enticing plot summaries before immersing yourself in the world of the story. Uncover the brilliance of the cast, browse captivating images, watch trailers, and seamlessly stream the content through Vidsrc."}
      />
      <SectionLeft 
        src={Image3}
        heading={"Curate Your Cinematic Escape"}
        paragraph={"Indulge in a tailored movie experience on Bingelord's genre-based movie list. Scroll through a visually captivating overflow of movie cards, each representing a unique cinematic gem. Save your favorites effortlessly to your watchlist for later enjoyment."}
      />
      <SectionRight 
        src={Image4}
        heading={"Experience Like Never Before"}
        paragraph={"Embark on a tailored exploration with Bingelord's search page, a dynamic gateway to your favorite movies and series. Effortlessly toggle between genres and filter content to match your mood. Whether you're in the mood for a blockbuster movie or a binge-worthy series, Bingelord's search page transforms your queries into a personalized cinematic journey."}
      />
      <SectionLeft 
        src={Image5}
        heading={"Personalize Your Journey with Account"}
        paragraph={"Take command of your Bingelord experience on the Account Page. With just your email and a swift logout option, simplicity meets control. Witness the magic of real-time updates as your watchlist dynamically grows and shrinks with every addition or removal. Explore, curate, and enjoy – your cinematic adventure is now in your hands."}
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