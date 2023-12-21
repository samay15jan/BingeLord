import React from 'react'
import { useParams } from 'react-router-dom';
import tw from 'twin.macro';
import styled from 'styled-components';

const Iframe = styled.iframe`${tw`w-screen h-screen`}`

const Overflow = () => {
  const { menu, url } = useParams();

  return (
    <div>
        <Iframe
            src={`https://www.youtube.com/embed/${url}`}
            allowFullScreen
        ></Iframe>
    </div>
  )
}

export default Overflow