import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import tw from 'twin.macro';
import styled from 'styled-components';
import axios from 'axios';
import CloseButton from './CloseButton';
import Media from './Media';

const Container = styled.div`${tw``}`
const Image = styled.img`${tw`px-10 py-10 w-screen h-screen justify-center`}`
const StreamIframe = styled.iframe`${tw`px-10 py-10 w-screen h-screen justify-center`}`
const YoutubeIframe = styled.iframe`${tw`px-10 py-10 w-screen h-screen justify-center`}`

const Overflow = () => {
  const { id, menu, url } = useParams();

  const output = () => {
    if(menu === 'image'){
      return <Image src={`https://image.tmdb.org/t/p/original/${url}`} alt='Image'/>
    } 
    if(menu === 'photos' || menu === 'videos'){
      return <Media ID={id} menu={menu}/>
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
      <CloseButton id={id}/>
    </Container>
  )
}

export default Overflow