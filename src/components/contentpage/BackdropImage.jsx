import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const CroppedImageContainer = styled.div`
  ${tw`absolute lg:relative h-[290px] w-screen overflow-hidden rounded-b-3xl`}
`;

const BackgroundImage = styled.img`
  ${tw`absolute top-0 w-full h-full object-cover opacity-30`}
`;

function Background({ image }) {
    return (
        <>
        {image && 
            <CroppedImageContainer>
              <BackgroundImage src={`https://image.tmdb.org/t/p/original${image}`}/>
            </CroppedImageContainer>
        }
        </>
    )
}

export default Background