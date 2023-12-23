import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import TrailerButton from './TrailerButton'
import PlayButton from './PlayButton'

const Container = styled.div`${tw`absolute top-14 left-96 z-50 `}`
const Year = styled.div`${tw`text-sm ml-5 font-semibold`}`
const Title = styled.div`${tw`text-4xl font-bold px-5 py-4 w-[550px]`}`
const Genre = styled.div`${tw`flex text-sm ml-4 font-semibold`}`
const GenreType = styled.div`${tw`mx-1`}`
const Text1 = styled.div`${tw`text-lg ml-5 mt-4 font-semibold`}`
const Voting = styled.div`${tw`text-xl font-bold ml-5`}`
const Text2 = styled.div`${tw`text-lg ml-5 mt-12 font-semibold`}`
const Overview = styled.div`${tw`mt-4 text-sm ml-5 mr-10 text-gray-100 opacity-70 w-[550px]`}`
const Text3 = styled.div`${tw`text-lg ml-5 mt-28 mb-5 font-semibold`}`
const GridContainer1 = styled.div`${tw`grid grid-cols-2 mt-2 justify-between w-[550px]`}`
const GridContainer2 = styled.div`${tw`grid grid-cols-1 mt-1`}`
const Text4 = styled.div`${tw`text-sm ml-5 font-semibold`}`
const Text5 = styled.div`${tw`text-sm text-gray-100 opacity-70 text-right`}`

const Details = ({ data }) => {

  const rating = () => {
    const rate = data.vote_average.toFixed(0)/2
    if(rate === 0){return}
    else if(rate >= 0.5 && rate < 1.5){return '⭐'}
    else if(rate >= 1.5 && rate < 2.5){return '⭐ ⭐'}
    else if(rate >= 2.5 && rate < 3.5){return '⭐ ⭐ ⭐'}
    else if(rate >= 3.5 && rate < 4.5){return '⭐ ⭐ ⭐ ⭐'}
    else{return '⭐ ⭐ ⭐ ⭐ ⭐'}
  }

  const year = new Date(data.release_date).getFullYear();
  const getTrailer = data.videos?.results.filter((id => (id.type === "Trailer")))
  const director = data.credits?.crew.filter((id) => (id.job === "Director"))
  const producer = data.credits?.crew.filter((id) => (id.job === "Producer"))
  const screenplay = data.credits?.crew.filter((id) => (id.job === "Screenplay"))
  
  return (
    <Container>
          <Year>{year}</Year>
          <Title>{data.title}</Title>

          <Genre>
            {data.genres.map((genre, index) => (
              <GenreType key={genre.id}>
                {genre.name}
              </GenreType>
            ))}
          </Genre>

          <Text1>TMDB</Text1>
          <Voting>{rating()}</Voting>
          <Text2>StoryLine</Text2>
          <Overview>{data.overview}</Overview>
          <PlayButton menu={'vidsrc'} ID={data.id} text={'Play'}/>
          
          {getTrailer.length > 0 
            ? <TrailerButton 
                ID={data.id}
                menu={getTrailer[0].type}
                url={getTrailer[0].key} 
                text={'Watch Trailer'}
              /> 
            : ''
          }

          <Text3>More Details</Text3>

          <GridContainer1>
            <Text4>Director:</Text4>
            <Text5>{director[0]?.name}</Text5>
          </GridContainer1>

          <GridContainer1>
            <Text4>Producer:</Text4>
            <GridContainer2>
              {producer.map((data, index) => (
                <Text5 key={data.id}>
                  {data.name}
                </Text5>
              ))}
            </GridContainer2>
          </GridContainer1>

          <GridContainer1>
            <Text4>Screenplay:</Text4> 
            <GridContainer2>
              {screenplay.map((data, index) => (
                <Text5 key={data.id}>
                  {data.name}
                </Text5>
              ))}
            </GridContainer2>
          </GridContainer1>

          <GridContainer1>
            <Text4>Collection:</Text4>
            <GridContainer2>
                <Text5>{data.belongs_to_collection?.name}</Text5>
            </GridContainer2>
          </GridContainer1>
          
    </Container>
  )
}

export default Details