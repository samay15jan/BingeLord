import react from 'react'
import styled from 'styled-components';
import tw from 'twin.macro';

const Image = styled.img`${tw`w-48 m-4 rounded-2xl`}`

function Card({ data }) {
    return (
        <Image src={`https://image.tmdb.org/t/p/original${data.poster_path}`} />
    )
}

export default Card