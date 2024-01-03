import React from 'react'
import { useParams } from 'react-router-dom';
import tw from 'twin.macro';
import styled from 'styled-components';
import CloseButton from './CloseButton';
import Media from './Media';

const Container = styled.div`${tw``}`
const Image = styled.img`${tw`mt-20 lg:mt-0 w-screen lg:h-screen justify-center`}`
const StreamIframe = styled.iframe`${tw`w-screen h-screen justify-center`}`
const YoutubeIframe = styled.iframe`${tw`w-screen h-screen h-96 lg:h-screen justify-center`}`

const Overflow = () => {
  const { type, id, menu, url } = useParams();

  const output = () => {
    if(menu === 'image'){
      return <Image src={`https://image.tmdb.org/t/p/original/${url}`} alt='Image'/>
    } 
    if(menu === 'photos' || menu === 'videos'){
      return <Media type={type} ID={id} menu={menu}/>
    }
    if(menu === 'vidsrc'){
      return <StreamIframe src={`https://vidsrc.to/embed/${type === 'movies'? 'movie' : 'tv'}/${id}`} allowFullScreen/>
    }
    if(menu === 'Trailer'){
      return <YoutubeIframe src={`https://www.youtube.com/embed/${url}`} allowFullScreen/>
    }

  }

  return (
    <Container>
      {output()}
      <CloseButton type={type} id={id}/>
    </Container>
  )
}

export default Overflow