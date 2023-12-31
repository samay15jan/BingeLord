import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

const SubContainer = styled.div`${tw`grid grid-cols-2 p-10 my-32`}`
const ImageContainer = styled.img`${tw`w-full p-2 rounded-3xl shadow-lg shadow-[#5c030c] ring-1 ring-[#5c030c]`}`
const DataContainer = styled.div`${tw`relative ml-10 my-20`}`
const Heading = styled.h2`${tw`text-3xl mb-10 text-center font-bold shadow-2xl shadow-[#a60516]`}`
const Paragraph = styled.p`${tw`text-xl text-center text-gray-500`}`

const SectionLeft = ({ src, heading, paragraph }) => {
  return (
      <SubContainer>
        <ImageContainer src={src} alt="img" />
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