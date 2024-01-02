import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const BackgroundImage = styled.img`${tw`object-cover w-screen h-screen opacity-20`}`

function Background({ image }) {
    return (
        <>
        {image && 
            <BackgroundImage loading='eager' src={`https://image.tmdb.org/t/p/original${image}`}/>
        }
        </>
    )
}

export default Background