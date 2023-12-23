import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import tw from 'twin.macro';
import styled from 'styled-components';
import axios from 'axios';

const Container = styled.div`${tw``}`
const ImageIframe = styled.iframe`${tw`w-screen h-screen justify-center`}`
const StreamIframe = styled.iframe`${tw`w-screen h-screen justify-center`}`
const YoutubeIframe = styled.iframe`${tw`w-screen h-screen justify-center`}`

const Overflow = () => {
  const [apiData, setApiData] = useState()

  const { id, menu, url } = useParams();

  const output = () => {
    if(menu === 'image'){
      return <ImageIframe src={`https://image.tmdb.org/t/p/original/${url}`} />
    } 
    if(menu === 'vidsrc'){
      return <StreamIframe src={`https://vidsrc.to/embed/movie/${id}`} allowFullScreen/>
    }
    if(menu === 'Trailer'){
      return <YoutubeIframe src={`https://www.youtube.com/embed/${url}`} allowFullScreen/>
    }
  }
 
  return (
    <Container>
      {output()}
    </Container>
  )
}

export default Overflow