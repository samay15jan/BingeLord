import react from 'react'
import styled from 'styled-components';
import tw from 'twin.macro';

const CardContainer = styled.div`
  ${tw`flex flex-col items-center justify-center p-2 rounded-md w-56 hover:blur`}
`;

const Image = styled.img`
  ${tw`w-full h-80 object-cover rounded-3xl`}
`;
const Text = styled.div`
  ${tw`relative bottom-0 text-white font-bold`}
`;

function Card({ data }) {
    var year = new Date(data.release_date).getFullYear();
    // Word Limit for Overview
    const words = data.overview?.split(' ');
    const cutWords = words?.slice(0, 20);
    const finalOutput = cutWords?.join(' ') + (words?.length > 20 ? '...' : '');

    return (
        <CardContainer>
            <h1>{data.title}</h1>
            <Image src={`https://image.tmdb.org/t/p/original${data.poster_path}`} />
            <Text>⭐ {data.vote_average.toFixed(1)}</Text>
            <Text>{year}</Text>
            <Text>{finalOutput}</Text>
        </CardContainer>
    )
}

export default Card