import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const BackgroundImage = styled.img`${tw`opacity-10`}`

function Background({image}) {
    return (
        <>
        {image && 
            <BackgroundImage src={`https://image.tmdb.org/t/p/original${image}`}/>
        }
        </>
    )
}

export default Background