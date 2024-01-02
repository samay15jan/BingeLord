import React, { useState } from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

const SubContainer = styled.div`${tw`grid grid-cols-1 lg:grid-cols-2 p-4 lg:p-10 my-32`}`
const ImageContainer = styled.img`${tw`transition-transform w-full p-0 lg:p-2 rounded-lg lg:rounded-xl shadow-md shadow-[#5c030c] lg:shadow-lg lg:shadow-[#5c030c] lg:ring-1 lg:ring-[#5c030c]`}`
const DataContainer = styled.div`${tw`relative lg:ml-10 mt-20`}`
const Heading = styled.h2`${tw`text-2xl lg:text-3xl mb-10 text-center font-bold shadow-2xl shadow-[#a60516]`}`
const Paragraph = styled.p`${tw`text-xl lg:text-2xl mx-5 lg:mx-0 text-center text-gray-500`}`

const SectionLeft = ({ src, heading, paragraph }) => {
  const [imgHovered, setImgHovered] = useState(false)
  const handleMouseEnter = () => {
      setImgHovered(true)
  }
  const handleMouseLeave = () => {
      setImgHovered(false)
  }
  return (
      <SubContainer>
        <ImageContainer 
            className={`${imgHovered ? 'transform scale-105' : ''}`} 
            src={src} alt="img"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleMouseEnter}
            onTouchEnd={handleMouseLeave}
        />
        <DataContainer>
          <Heading>
            {heading}
          </Heading>
          <Paragraph>
            {paragraph}
          </Paragraph>
        </DataContainer>
      </SubContainer>
  )
}

export default SectionLeft