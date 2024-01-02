import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import ColorThief from 'colorthief';

const Container = styled.button`
${tw`hidden lg:block absolute z-50 right-24 bottom-16 top-24 p-10 rounded-xl backdrop-blur-xl shadow-sm shadow-white`}
`

const ImageContainer = styled.img`
${tw`transition-transform relative w-72 rounded-xl`}
`

const Poster = ({image}) => {

  // Getting dominant color based on image with ColorTheif
  const [dominantColor, setDominantColor] = useState(null);
  useEffect(() => {
    const newImage = new Image();
    newImage.crossOrigin = "Anonymous";
    newImage.src = `https://image.tmdb.org/t/p/original${image}`;
    newImage.onload = () => {
      const colorThief = new ColorThief();
      const color = colorThief.getColor(newImage);
      setDominantColor(color);
    };
  }, [image]);

  // Hover Effect
  const [imgHovered, setImgHovered] = useState(false)
  const handleMouseEnter = () => {
      setImgHovered(true)
  }
  const handleMouseLeave = () => {
      setImgHovered(false)
  }

  return (
    <Container style={dominantColor && {boxShadow: `0 0 500px rgba(${dominantColor[0]}, ${dominantColor[1]}, ${dominantColor[2]}, 0.5)`,}}>
        <ImageContainer 
          src={`https://image.tmdb.org/t/p/original${image}`} 
          alt="Poster"
          className={`${imgHovered ? 'transform scale-110' : ''}`} 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
    </Container>
  )
}

export default Poster