import react, {useState} from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import WatchButton from './WatchButton'

const CardContainer = styled.div`
  ${tw`relative p-2 rounded-md w-56 `}
`;

const SubContainer = styled.div`
  ${tw`relative`}
`;

const DetailsContainer1 = styled.div`
  ${tw`absolute inset-0 z-10 p-2 rounded-3xl`}
  background: linear-gradient(to bottom, rgba(18, 18, 18, 0.8), #121212);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const DetailsContainer2 = styled.div`
  ${tw`absolute bottom-0 inset-0 z-10 p-2 rounded-3xl`}
  background: linear-gradient(to bottom, rgba(18, 18, 18, 0), rgba(18, 18, 18, 0.6) 50%, #121212);  flex-direction: column;
  justify-content: space-between;
`;

const Title1 = styled.div`
  ${tw`w-full text-lg text-white font-bold absolute bottom-44 text-center p-2`}
`;

const Title2 = styled.div`
  ${tw`w-full text-lg text-white font-bold absolute top-52 text-center p-2 `}
`;

const Image = styled.img`
  ${tw`w-full h-80 object-cover rounded-3xl`}
`;

const FlexContainer1 = styled.div`
  ${tw`flex absolute top-2`}
`;

const FlexContainer2 = styled.div`
  ${tw`flex absolute top-44 justify-center ml-6`}
`;

const OtherDetails = styled.div`
  ${tw`bg-[#121212] mx-2 rounded-xl p-1 px-3 text-sm text-slate-100 font-medium`}
`;

const AddButton = styled.button`
  ${tw`bg-[#121212] mx-2 rounded-xl px-3 text-lg text-slate-100 font-bold`}
  &:hover {
    background-color: #c9c9c9;
  }
`;

const Description = styled.div`
  ${tw`absolute bottom-16 mx-2 mb-2 text-slate-100 font-medium`}
`;


function Card({ type, data }) {
    const [showDetails, setShowDetails] = useState(false)
    var year 
    if(type === 'movies'){
      year = new Date(data.release_date).getFullYear()
    } else {
      year = new Date(data.first_air_date).getFullYear()
    }

    // Word Limit for Overview
    const words = data.overview?.split(' ');
    const cutWords = words?.slice(0, 15);
    const description = cutWords?.join(' ') + (words?.length > 15 ? '...' : '');

    return (
        <CardContainer 
          onMouseEnter={() => setShowDetails(true)}
          onMouseLeave={() => setShowDetails(false)}
        >
          {showDetails 
              ? <SubContainer>
                  <Image loading="lazy" src={`https://image.tmdb.org/t/p/original${data.poster_path}`} />
                  <DetailsContainer1>
                    <Title1>{type === 'tv' ? data.name : data.title}</Title1>
                    <FlexContainer1>
                      <OtherDetails>⭐ {data.vote_average.toFixed(0)/2}</OtherDetails>
                      <OtherDetails>{year}</OtherDetails>
                      <AddButton>+</AddButton>
                    </FlexContainer1>
                    <Description>{description}</Description>
                    <WatchButton type={type} id={data.id}/>
                  </DetailsContainer1>
                </SubContainer>
              : <SubContainer>
                  <Image loading="lazy" src={`https://image.tmdb.org/t/p/original${data.poster_path}`} />
                  <DetailsContainer2>
                    <FlexContainer2>
                      <OtherDetails>⭐ {data.vote_average.toFixed(0)/2}</OtherDetails>
                      <OtherDetails>{year}</OtherDetails>
                    </FlexContainer2>
                    <Title2>{type === 'tv' ? data.name : data.title}</Title2>
                  </DetailsContainer2>
                </SubContainer>
          }
        </CardContainer>
    )
}

export default Card