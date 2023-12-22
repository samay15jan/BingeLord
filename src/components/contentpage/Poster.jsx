import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import ColorThief from 'colorthief';

const Container = styled.div`
${tw`absolute z-50 left-14 top-14 mb-20 rounded-xl mr-20 backdrop-blur-xl shadow-sm shadow-white`}
`

const ImageContainer = styled.img`
${tw`w-72 rounded-xl`}
`

const Poster = ({ image }) => {
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

  return (
    <Container style={dominantColor && {boxShadow: `0 0 50px rgba(${dominantColor[0]}, ${dominantColor[1]}, ${dominantColor[2]}, 0.5)`,}}>
        <ImageContainer src={`https://image.tmdb.org/t/p/original${image}`} alt="Poster" />
    </Container>
  )
}

export default Poster