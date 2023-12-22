import React from 'react'
import { useParams } from 'react-router-dom';
import tw from 'twin.macro';
import styled from 'styled-components';

const Iframe = styled.iframe`${tw`w-screen h-screen`}`

const Overflow = () => {
  const { id, menu, url } = useParams();

  return (
    <div>
      {url === 'stream' && menu === 'vidsrc' 
        ? <Iframe
            src={`https://vidsrc.to/embed/movie/${id}`}
            allowFullScreen
          ></Iframe>

        : <Iframe
            src={`https://www.youtube.com/embed/${url}`}
            allowFullScreen
          ></Iframe>
        }
      
    </div>
  )
}

export default Overflow